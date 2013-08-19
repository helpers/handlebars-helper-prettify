# {{prettify}}

> A Handlebars helper for prettifying rendered HTML.


## Quickstart
In the root of the project in which you plan to use the helper, in the command line run:

```bash
npm i prettify
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
Options can be either set in the Assemble task or target options in your Gruntfile:


```javascript
grunt.initConfig({
  assemble: {
    options: {
      prettify: {
        indent: 4
        // ...
      }
    },
    project: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

### condense
Type: `Boolean`
Default value: `true`

Removes extra newlines and retains indenting.

### indent
Type: `Number`
Default value: `2`

_Alias for `indent_size`_

The indentation size to be used on the output HTML.

```handlebars
{{#prettify indent="4"}}
  {{> body }}
{{/prettify}}
```

This helper is based on [grunt-prettify](https://github.com/jonschlinkert/grunt-prettify), which depends on and extends [js-beautify](https://github.com/einars/js-beautify). To learn about additional options, please visit those projects.


## Example

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