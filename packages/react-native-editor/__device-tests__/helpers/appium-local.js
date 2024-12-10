/**
 * External dependencies
 */
const childProcess = require( 'child_process' );

// Spawns an appium process.
const start = ( { port = 4723, flags } ) =>
	new Promise( ( resolve, reject ) => {
		// Log all processes using the same port
		childProcess.exec( `lsof -i :${ port }`, ( err, stdout, stderr ) => {
			if ( err ) {
				// eslint-disable-next-line no-console
				console.error( `>>>> Error executing lsof: ${ err }` );
				return;
			}
			if ( stderr ) {
				// eslint-disable-next-line no-console
				console.error( `>>>> stderr: ${ stderr }` );
				return;
			}
			// eslint-disable-next-line no-console
			console.log( `>>>> Processes using port ${ port }:\n${ stdout }` );
		} );

		// Kill all processes using the same port
		childProcess.exec(
			`lsof -t -i :${ port } | xargs kill -9`,
			( err, stdout, stderr ) => {
				if ( err ) {
					// eslint-disable-next-line no-console
					console.error( `>>>> Error killing processes: ${ err }` );
					return;
				}
				if ( stderr ) {
					// eslint-disable-next-line no-console
					console.error( `>>>> stderr: ${ stderr }` );
					return;
				}
				// eslint-disable-next-line no-console
				console.log( `>>>> Killed processes using port ${ port }` );
			}
		);

		const args = [
			'--port',
			port.toString(),
			'--log',
			'./appium-out.log',
			'--log-no-colors',
			'--log-level',
			'debug',
			'--relaxed-security', // Needed for mobile:shell commend for text entry on Android
			flags,
		].filter( Boolean );
		const appium = childProcess.spawn( 'appium', args );

		let appiumOutputBuffer = '';
		let resolved = false;
		appium.stdout.on( 'data', ( data ) => {
			if ( ! resolved ) {
				appiumOutputBuffer += data.toString();
				if (
					appiumOutputBuffer.indexOf(
						'Appium REST http interface listener started'
					) >= 0
				) {
					resolved = true;
					resolve( appium );
				}
			}
		} );

		appium.on( 'close', ( code ) => {
			if ( ! resolved ) {
				reject(
					new Error( `Appium process exited with code ${ code }` )
				);
			}
		} );
	} );

const stop = async ( appium ) => {
	if ( ! appium ) {
		return;
	}
	await appium.kill( 'SIGINT' );
};

module.exports = {
	start,
	stop,
};
