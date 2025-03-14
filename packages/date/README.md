# Date

Date module for WordPress.

## Installation

Install the module

```bash
npm install @wordpress/date --save
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for such language features and APIs, you should include [the polyfill shipped in `@wordpress/babel-preset-default`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/babel-preset-default#polyfill) in your code._

## API

<!-- START TOKEN(Autogenerated API docs) -->

### date

Formats a date (like `date()` in PHP).

_Related_

-   <https://en.wikipedia.org/wiki/List_of_tz_database_time_zones>
-   <https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC>

_Parameters_

-   _dateFormat_ `string`: PHP-style formatting string. See [php.net/date](https://www.php.net/manual/en/function.date.php).
-   _dateValue_ `Moment | Date | string | undefined`: Date object or string, parsable by moment.js.
-   _timezone_ `string | number | undefined`: Timezone to output result in or a UTC offset. Defaults to timezone from site.

_Returns_

-   `string`: Formatted date in English.

### dateI18n

Formats a date (like `wp_date()` in PHP), translating it into site's locale.

Backward Compatibility Notice: if `timezone` is set to `true`, the function behaves like `gmdateI18n`.

_Related_

-   <https://en.wikipedia.org/wiki/List_of_tz_database_time_zones>
-   <https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC>

_Parameters_

-   _dateFormat_ `string`: PHP-style formatting string. See [php.net/date](https://www.php.net/manual/en/function.date.php).
-   _dateValue_ `Moment | Date | string | undefined`: Date object or string, parsable by moment.js.
-   _timezone_ `string | number | boolean | undefined=`: Timezone to output result in or a UTC offset. Defaults to timezone from site. Notice: `boolean` is effectively deprecated, but still supported for backward compatibility reasons.

_Returns_

-   `string`: Formatted date.

### format

Formats a date. Does not alter the date's timezone.

_Parameters_

-   _dateFormat_ `string`: PHP-style formatting string. See [php.net/date](https://www.php.net/manual/en/function.date.php).
-   _dateValue_ `Moment | Date | string | undefined`: Date object or string, parsable by moment.js.

_Returns_

-   `string`: Formatted date.

### getDate

Create and return a JavaScript Date Object from a date string in the WP timezone.

_Parameters_

-   _dateString_ `?string`: Date formatted in the WP timezone.

_Returns_

-   `Date`: Date

### getSettings

Returns the currently defined date settings.

_Returns_

-   `DateSettings`: Settings, including locale data.

### gmdate

Formats a date (like `date()` in PHP), in the UTC timezone.

_Parameters_

-   _dateFormat_ `string`: PHP-style formatting string. See [php.net/date](https://www.php.net/manual/en/function.date.php).
-   _dateValue_ `Moment | Date | string | undefined`: Date object or string, parsable by moment.js.

_Returns_

-   `string`: Formatted date in English.

### gmdateI18n

Formats a date (like `wp_date()` in PHP), translating it into site's locale and using the UTC timezone.

_Parameters_

-   _dateFormat_ `string`: PHP-style formatting string. See [php.net/date](https://www.php.net/manual/en/function.date.php).
-   _dateValue_ `Moment | Date | string | undefined`: Date object or string, parsable by moment.js.

_Returns_

-   `string`: Formatted date.

### humanTimeDiff

Returns a human-readable time difference between two dates, like human_time_diff() in PHP.

_Parameters_

-   _from_ `Moment | Date | string`: From date, in the WP timezone.
-   _to_ `Moment | Date | string | undefined`: To date, formatted in the WP timezone.

_Returns_

-   `string`: Human-readable time difference.

### isInTheFuture

Check whether a date is considered in the future according to the WordPress settings.

_Parameters_

-   _dateValue_ `string`: Date String or Date object in the Defined WP Timezone.

_Returns_

-   `boolean`: Is in the future.

### setSettings

Adds a locale to moment, using the format supplied by `wp_localize_script()`.

_Parameters_

-   _dateSettings_ `DateSettings`: Settings, including locale data.

<!-- END TOKEN(Autogenerated API docs) -->

## Contributing to this package

This is an individual package that's part of the Gutenberg project. The project is organized as a monorepo. It's made up of multiple self-contained software packages, each with a specific purpose. The packages in this monorepo are published to [npm](https://www.npmjs.com/) and used by [WordPress](https://make.wordpress.org/core/) as well as other software projects.

To find out more about contributing to this package or Gutenberg as a whole, please read the project's main [contributor guide](https://github.com/WordPress/gutenberg/tree/HEAD/CONTRIBUTING.md).

<br /><br /><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
