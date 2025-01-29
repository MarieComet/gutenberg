/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';

export const ALLOWED_FILE_EXTENSIONS = [ 'otf', 'ttf', 'woff', 'woff2' ];

export const FONT_WEIGHTS = [
	{
		value: 100,
		label: _x( 'Thin', 'font weight' ),
		slug: 'thin',
	},
	{
		value: 200,
		label: _x( 'Extra-light', 'font weight' ),
		slug: 'extra-light',
	},
	{
		value: 300,
		label: _x( 'Light', 'font weight' ),
		slug: 'light',
	},
	{
		value: 400,
		label: _x( 'Normal', 'font weight' ),
		slug: 'normal',
	},
	{
		value: 500,
		label: _x( 'Medium', 'font weight' ),
		slug: 'medium',
	},
	{
		value: 600,
		label: _x( 'Semi-bold', 'font weight' ),
		slug: 'semi-bold',
	},
	{
		value: 700,
		label: _x( 'Bold', 'font weight' ),
		slug: 'bold',
	},
	{
		value: 800,
		label: _x( 'Extra-bold', 'font weight' ),
		slug: 'extra-bold',
	},
	{
		value: 900,
		label: _x( 'Black', 'font weight' ),
		slug: 'black',
	},
];

export const FONT_STYLES = [
	{
		value: 'normal',
		label: _x( 'Normal', 'font style' ),
		slug: 'normal',
	},
	{
		value: 'italic',
		label: _x( 'Italic', 'font style' ),
		slug: 'italic',
	},
];
