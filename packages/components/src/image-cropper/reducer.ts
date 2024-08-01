/**
 * Internal dependencies
 */
import type { ResizeDirection, Position } from './types';
import {
	rotatePoint,
	degreeToRadian,
	calculateRotatedBounds,
	getMinScale,
} from './math';

export type State = {
	/** The image dimensions. */
	image: {
		/** The x position of the image center. */
		x: number;
		/** The y position of the image center. */
		y: number;
		/** The width of the image. */
		width: number;
		/** The height of the image. */
		height: number;
	};
	/** The image transforms. */
	transforms: {
		/** The angle of the image in degrees, from -45 to 45 degrees. */
		angle: number;
		/** The number of 90-degree rotations clockwise. */
		rotations: number;
		/** The image scale. */
		scale: { x: number; y: number };
	};
	/** The cropper window dimensions. */
	cropper: {
		/** The width of the cropper window. */
		width: number;
		/** The height of the cropper window */
		height: number;
		/** Whether the cropper window aspect ratio is locked. */
		lockAspectRatio: boolean;
	};
	/** Whether the cropper window is resizing. */
	isResizing: boolean;
	/** Whether the image is dragging/moving. */
	isDragging: boolean;
	/** Whether the image is zooming/pinching. */
	isZooming: boolean;
};

/** Zoom in/out to a scale. */
type ZoomAction = {
	/** Zoom type action. */
	type: 'ZOOM';
	/** Zoom scale. */
	scale: number;
	/** Zoom position. */
	position: Position;
};

/** End zooming. */
type ZoomEndAction = {
	/** Zoom end type action. */
	type: 'ZOOM_END';
};

/** Flip the image horizontally. */
type FlipAction = {
	/** Flip type action. */
	type: 'FLIP';
};

/** Rotate the image to an angle. */
type RotateAction = {
	/** Rotate type action. */
	type: 'ROTATE';
	/** Rotate angle in degrees. */
	angle: number;
};

/** Rotate the image 90-degree clockwise or counter-clockwise. */
type Rotate90DegAction = {
	/** Rotate clockwise type action. */
	type: 'ROTATE_90_DEG';
	/** Whether to rotate counter-clockwise instead. */
	isCounterClockwise?: boolean;
};

/** Move the image to a position. */
type MoveAction = {
	/** Move type action. */
	type: 'MOVE';
	/** Move x position. */
	x: number;
	/** Move y position. */
	y: number;
};

/** End moving the image. */
type MoveEndAction = {
	/** Move end type action. */
	type: 'MOVE_END';
};

/** Start resizing the cropper window. */
type ResizeStartAction = {
	/** Resize start type action. */
	type: 'RESIZE_START';
};

/** Resize the cropper window by a delta size in a direction. */
type MoveWindowAction = {
	/** Move window type action. */
	type: 'MOVE_WINDOW';
	/** Move x position. */
	x: number;
	/** Move y position. */
	y: number;
};

/** Resize the cropper window by a delta size in a direction. */
type ResizeWindowAction = {
	/** Resize window type action. */
	type: 'RESIZE_WINDOW';
	/** Resize direction. */
	direction: ResizeDirection;
	/** Change in size. */
	delta: {
		/** Change in width. */
		width: number;
		/** Change in height. */
		height: number;
	};
};

/** Resize the container and image to a new width. */
type ResizeContainerAction = {
	/** Resize container type action. */
	type: 'RESIZE_CONTAINER';
	/** New width of the container. */
	width: number;
};

/** Reset the state to the initial state. */
type ResetAction = {
	/** Reset type action. */
	type: 'RESET';
};

/** All possible actions. */
type Action =
	| ZoomAction
	| ZoomEndAction
	| FlipAction
	| RotateAction
	| Rotate90DegAction
	| MoveAction
	| MoveEndAction
	| ResizeStartAction
	| MoveWindowAction
	| ResizeWindowAction
	| ResizeContainerAction
	| ResetAction;

function createInitialState( {
	width,
	height,
}: {
	width: number;
	height: number;
} ): State {
	return {
		image: {
			width,
			height,
			x: 0,
			y: 0,
		},
		transforms: {
			angle: 0,
			rotations: 0,
			scale: { x: 1, y: 1 },
		},
		cropper: {
			width,
			height,
			lockAspectRatio: false,
		},
		isResizing: false,
		isDragging: false,
		isZooming: false,
	};
}

function imageCropperReducer( state: State, action: Action ) {
	const {
		image,
		transforms: { angle, rotations, scale },
		cropper,
	} = state;
	const radian = degreeToRadian( angle + ( rotations % 4 ) * 90 );
	// eslint-disable-next-line @wordpress/no-unused-vars-before-return
	const absScale = Math.abs( scale.x );

	switch ( action.type ) {
		case 'ZOOM': {
			const minScale = getMinScale(
				radian,
				image.width,
				image.height,
				cropper.width,
				cropper.height,
				image.x,
				image.y
			);
			const nextScale = Math.min(
				Math.max( action.scale, minScale ),
				10
			);

			return {
				...state,
				image: {
					...state.image,
					...action.position,
				},
				transforms: {
					...state.transforms,
					scale: {
						x: nextScale * Math.sign( scale.x ),
						y: nextScale * Math.sign( scale.y ),
					},
				},
				isZooming: true,
			};
		}
		case 'ZOOM_END': {
			return {
				...state,
				isZooming: false,
			};
		}
		case 'FLIP': {
			const isAxisSwapped = rotations % 2 !== 0;
			return {
				...state,
				image: {
					...state.image,
					x: -image.x,
				},
				transforms: {
					...state.transforms,
					angle: -angle,
					scale: {
						x: scale.x * ( isAxisSwapped ? 1 : -1 ),
						y: scale.y * ( isAxisSwapped ? -1 : 1 ),
					},
				},
			};
		}
		case 'ROTATE': {
			const nextRadian = degreeToRadian( action.angle + rotations * 90 );
			const scaledWidth = image.width * absScale;
			const scaledHeight = image.height * absScale;

			// Calculate the translation of the image center after the rotation.
			// This is needed to rotate from the center of the cropper rather than the
			// center of the image.
			const deltaRadians = nextRadian - radian;
			const rotatedPosition = rotatePoint(
				{ x: image.x, y: image.y },
				deltaRadians
			);

			// Calculate the minimum scale to fit the image within the cropper.
			// TODO: Optimize the performance?
			const minScale =
				getMinScale(
					nextRadian,
					scaledWidth,
					scaledHeight,
					cropper.width,
					cropper.height,
					rotatedPosition.x,
					rotatedPosition.y
				) * absScale;
			const nextScale = Math.min( Math.max( absScale, minScale ), 10 );

			return {
				...state,
				image: {
					...state.image,
					...rotatedPosition,
				},
				transforms: {
					...state.transforms,
					angle: action.angle,
					scale: {
						x: nextScale * Math.sign( scale.x ),
						y: nextScale * Math.sign( scale.y ),
					},
				},
			};
		}
		case 'ROTATE_90_DEG': {
			const isCounterClockwise = action.isCounterClockwise;
			const nextRotations = rotations + ( isCounterClockwise ? -1 : 1 );
			const rotatedPosition = rotatePoint(
				{ x: image.x, y: image.y },
				( Math.PI / 2 ) * ( isCounterClockwise ? -1 : 1 )
			);
			return {
				...state,
				image: {
					...state.image,
					x: rotatedPosition.x,
					y: rotatedPosition.y,
				},
				transforms: {
					...state.transforms,
					rotations: nextRotations,
				},
				cropper: {
					...state.cropper,
					width: cropper.height,
					height: cropper.width,
				},
			};
		}
		case 'MOVE': {
			// Calculate the boundaries of the area where the cropper can move.
			// These boundaries ensure the cropper stays within the image.
			const { minX, maxX, minY, maxY } = calculateRotatedBounds(
				radian,
				image.width * absScale,
				image.height * absScale,
				cropper.width,
				cropper.height
			);

			// Rotate the action point to align with the non-rotated coordinate system.
			const rotatedPoint = rotatePoint(
				{ x: action.x, y: action.y },
				-radian
			);

			// Constrain the rotated point to within the calculated boundaries.
			// This ensures the cropper doesn't move outside the image.
			const boundPoint = {
				x: Math.min( Math.max( rotatedPoint.x, minX ), maxX ),
				y: Math.min( Math.max( rotatedPoint.y, minY ), maxY ),
			};

			// Rotate the constrained point back to the original coordinate system.
			const nextPosition = rotatePoint( boundPoint, radian );

			return {
				...state,
				image: {
					...state.image,
					x: nextPosition.x,
					y: nextPosition.y,
				},
				isDragging: true,
			};
		}
		case 'MOVE_END': {
			return {
				...state,
				isDragging: false,
			};
		}
		case 'RESIZE_START': {
			return {
				...state,
				isResizing: true,
			};
		}
		case 'MOVE_WINDOW': {
			const { x, y } = action;
			return {
				...state,
				cropper: {
					...state.cropper,
					x,
					y,
				},
			};
		}
		case 'RESIZE_WINDOW': {
			const { direction, delta } = action;

			// Calculate the new size of the cropper.
			const newSize = {
				width: cropper.width + delta.width,
				height: cropper.height + delta.height,
			};

			// Determine the actual dimensions of the image, considering rotations.
			const isAxisSwapped = rotations % 2 !== 0;
			const imageDimensions = {
				width: isAxisSwapped ? image.height : image.width,
				height: isAxisSwapped ? image.width : image.height,
			};

			// Calculate the scale of the image to fit within the new size.
			const widthScale = imageDimensions.width / newSize.width;
			const heightScale = imageDimensions.height / newSize.height;
			const windowScale = Math.min( widthScale, heightScale );
			const nextScale = absScale * windowScale;

			const scaledSize = {
				width: imageDimensions.width,
				height: imageDimensions.height,
			};
			const translated = { x: 0, y: 0 };
			// Adjust scaled size and translation based on which dimension is limiting.
			// We do this instead of multiplying by windowScale to account for floating point errors.
			if ( widthScale === windowScale ) {
				scaledSize.height = newSize.height * windowScale;
				translated.y =
					imageDimensions.height / 2 - scaledSize.height / 2;
			} else {
				scaledSize.width = newSize.width * windowScale;
				translated.x = imageDimensions.width / 2 - scaledSize.width / 2;
			}

			// Calculate the delta for the image in each direction.
			const deltaX = [ 'left', 'bottomLeft', 'topLeft' ].includes(
				direction
			)
				? delta.width
				: -delta.width;
			const deltaY = [ 'top', 'topLeft', 'topRight' ].includes(
				direction
			)
				? delta.height
				: -delta.height;

			return {
				...state,
				image: {
					...state.image,
					x: ( image.x + deltaX / 2 ) * windowScale,
					y: ( image.y + deltaY / 2 ) * windowScale,
				},
				transforms: {
					...state.transforms,
					scale: {
						x: nextScale * Math.sign( scale.x ),
						y: nextScale * Math.sign( scale.y ),
					},
				},
				cropper: {
					...state.cropper,
					width: scaledSize.width,
					height: scaledSize.height,
				},
				isResizing: false,
			};
		}
		case 'LOCK_ASPECT_RATIO': {
			// Calculate the size of the cropper based on the aspect ratio.
			const largerDimension = Math.max( image.width, image.height );
			const cropperSize =
				action.aspectRatio > 1
					? {
							width: largerDimension,
							height: largerDimension / action.aspectRatio,
					  }
					: {
							width: largerDimension / action.aspectRatio,
							height: largerDimension,
					  };

			const minScale = getMinScale(
				radian,
				image.width,
				image.height,
				cropperSize.width,
				cropperSize.height,
				image.x,
				image.y
			);
			const nextScale = Math.min( Math.max( absScale, minScale ), 10 );

			return {
				...state,
				transforms: {
					...state.transforms,
					scale: {
						x: nextScale * Math.sign( scale.x ),
						y: nextScale * Math.sign( scale.y ),
					},
				},
				cropper: {
					...state.cropper,
					...cropperSize,
					lockAspectRatio: true,
				},
			};
		}
		case 'UNLOCK_ASPECT_RATIO': {
			return {
				...state,
				cropper: {
					...state.cropper,
					lockAspectRatio: false,
				},
			};
		}
		case 'RESIZE_CONTAINER': {
			const isAxisSwapped = rotations % 2 !== 0;
			const imageInlineSize = isAxisSwapped ? image.height : image.width;
			const ratio = action.width / imageInlineSize;

			if ( ratio === 1 ) {
				return state;
			}

			return {
				...state,
				image: {
					...state.image,
					width: image.width * ratio,
					height: image.height * ratio,
					x: image.x * ratio,
					y: image.y * ratio,
				},
				cropper: {
					...state.cropper,
					width: cropper.width * ratio,
					height: cropper.height * ratio,
				},
			};
		}
		case 'RESET': {
			return createInitialState( {
				width: image.width,
				height: image.height,
			} );
		}
		default: {
			throw new Error( 'Unknown action' );
		}
	}
}

export { createInitialState, imageCropperReducer };
