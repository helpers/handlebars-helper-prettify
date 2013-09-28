# {{prettify}} [![NPM version](https://badge.fury.io/js/assemble.png)](http://badge.fury.io/js/assemble)

> {{prettify}} handlebars helper, for formatting (beautifying) output HTML.

This helper is based on [grunt-prettify](https://github.com/jonschlinkert/grunt-prettify), which depends on and extends [js-beautify](https://github.com/einars/js-beautify). To learn about additional options, please visit those projects.


## Quickstart
In the root of the project in which you plan to use the helper, in the command line run:

```bash
npm i prettify --save
```

## Usage
Use this helper in a "parent" [layout](http://assemble.io/docs/Layouts.html):

```handlebars
{{#prettify}}
  {{> body }}
{{/prettify}}
```
_See [nested layouts](http://assemble.io/docs/Layouts.html#nested-layouts)_.


## Options

### task options
Options can be set in your Gruntfile, in the `prettify` object in the Assemble task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      prettify: {
        indent: 4
      }
    },
    docs: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```
### hash options
Options passed in as hash arguments will override options defined in the Gruntfile:

```handlebars
{{#prettify indent="4"}}
  {{> body }}
{{/prettify}}
```

### condense
Type: `Boolean`
Default value: `true`

Removes extra newlines and retains indenting:

### newlines
Type: `Boolean`
Default value: `True`

Add a newline above each code comment:

```html
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- code comment -->
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>My Blog</h1>
    <h2>Post of the day</h2>

    <!-- scripts -->
    <a href="#">Read more...</a>
  </body>
</html>
```

### indent
Type: `Number`
Default value: `2`

The indentation size to be used on the output HTML. _Alias for `indent_size`_



## Indent Example

### Before

Using the `indent` option:

Template: `index.hbs`

```handlebars
{{#prettify indent="2"}}
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<h1>My Blog</h1>
<h2>Post of the day</h2>
<p>
Vestibulum posuere, quam sed bibendum posuere
Pellentesque habitant morbi tristique senectus
Pellentesque nulla augue, volutpat vitae
</p>
<a href="#">Read more...</a>
</body>
</html>
{{/prettify}}
```

### After

Renders to:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>My Blog</h1>
    <h2>Post of the day</h2>
    <p>
      Vestibulum posuere, quam sed bibendum posuere
      Pellentesque habitant morbi tristique senectus
      Pellentesque nulla augue, volutpat vitae
    </p>
    <a href="#">Read more...</a>
  </body>
</html>
```


## Condense Example

### Before

```html
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- code comment -->
    <meta charset="UTF-8">
    <title>Document</title>


  </head>


  <body>
    <h1>My Blog</h1>
    <h2>Post of the day</h2>


    <!-- scripts -->
    <a href="#">Read more...</a>


  </body>
</html>
```

Example output with `condensed: true`:

## After

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- code comment -->
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>My Blog</h1>
    <h2>Post of the day</h2>
    <!-- scripts -->
    <a href="#">Read more...</a>
  </body>
</html>
```

### Newlines

When used with `condense`, defining `newlines: true` will result in something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- code comment -->
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>My Blog</h1>
    <h2>Post of the day</h2>

    <!-- scripts -->
    <a href="#">Read more...</a>
  </body>
</html>
```

## Author

+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)
+ [github/jonschlinkert](http://github.com/jonschlinkert)


## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.