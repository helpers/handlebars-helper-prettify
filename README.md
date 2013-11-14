# {{prettify}} [![NPM version](https://badge.fury.io/js/prettify.png)](http://badge.fury.io/js/prettify) 

> {{prettify}} handlebars helper for formatting (beautifying) HTML, JavaScript and CSS.

This helper depends on and extends [js-beautify](https://github.com/einars/js-beautify). Please visit and star that project to show your support.

[Also see examples →](./EXAMPLES.md)

## Getting Started
In the root of the project in which you plan to use the helper, in the command line run:

```bash
npm i prettify --save
```

Use within your application with the following line of JavaScript:

```js
var helpers = require('prettify');
```

Now your handlebars instance will have access to the {{prettify}} helper.




## Options
#### Defining options

All options from [js-beautify](https://github.com/einars/js-beautify) are available in this helper, as well as a few custom options that were specially created for this helper. The helper comes with some sensible defaults (in the humble opinion of the helper creator), but it's easy to customize them if you need to. Here are are two (convenient) ways to set options:

* **options object**: pass an options object to the helper as a parameter. E.g. `{{#prettify opts.obj}}`.
* **options hash**: this is an easy way to set options on the helper, and it also gives you granular control over how the helper renders content.
* **Gruntfile**: if you use both [Grunt](http://gruntjs.com/) and [Assemble](http://assemble.io), you can define options in the Assemble task options of your project's Gruntfile.


##### options hash
By design, options define here will override options defined anywhere else. This approach also provides granular control over options, allowing you to defined different options on multiple instances of the helper in the same file.

Example:

```handlebars
{{#prettify condense='true'}}
  {{> header }}
{{/prettify}}

{{#prettify padcomments='true'}}
  {{> body }}
{{/prettify}}

{{#prettify condense='true'}}
  {{> footer }}
{{/prettify}}
```


##### "assemble" task options
The helper can be used without [Grunt](http://gruntjs.com/) or [Assemble](http://assemble.io). But if you happen to use these two awesome tools you can define options for the helper in your Gruntfile in the `prettify` sub-options for Assemble:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      prettify: {
        mode: 'js',  // 'html' is defined by default
        condense: true,
        padcomments: true,
        indent: 4
      }
    },
    ...
  }
});
```

Options defined in the Assemble task can be viewed as custom "global" defaults, which can be overridden by options defined in the options hash.


#### option defaults

The following options are passed to [js-beautify](https://github.com/einars/js-beautify). The defaults are shown for each option.

###### "html" mode

These options are available by default (see [detailed HTML options](./OPTIONS.md)):

```js
{
  "brace_style": "expand",      // collapse|expand|end-expand
  "indent-scripts": "normal",   // keep|separate|normal
  "indent_char": " ",           // (default: space) Indentation character. Can be an actual tab or space
  "indent_handlebars": false,   // format and indent {{#foo}}...{{/foo}}
  "indent_inner_html": false,   // Indent <head> and <body> sections
  "indent_size": 2,             // Indentation size
  "max_preserve_newlines": 5,   // Maximum number of line-breaks to be preserved in one chunk
  "preserve_newlines": true,    // Preserve existing line-breaks
  "unformatted": ["a", "sub", "sup", "b", "i", "u"], // List of tags that should not be reformatted (inline elements included by default)
  "wrap_line_length": 78,       // Maximum characters per line (0 disables this)

  // custom options made for this helper
  "indent": 2,          // convenience alias for indent_size
  "condense": false,    // remove extra newlines missed by js-beautify.
  "padcomments": false  // add an extra newline above each HTML code comment
}
```

###### "js" mode

When `mode` is set to `js`, the following options are available:

```js
{
  "brace_style": "collapse",
  "break_chained_methods": false,
  "eval_code": false,
  "indent": 2,
  "indent_char": " ",
  "indent_level": 0,
  "indent_size": 2,
  "indent_with_tabs": false,
  "jslint_happy": false,
  "keep_array_indentation": false,
  "keep_function_indentation": false,
  "max_preserve_newlines": 10,
  "preserve_newlines": true,
  "space_before_conditional": true,
  "unescape_strings": false,
  "wrap_line_length": 0
}
```

###### "css" mode

When `mode` is set to `css`, the following options are available:

```js
{
  "end_with_newline": false,
  "indent": 2,
  "indent_char": " ",
  "indent_size": 2,
  "selector_separator": ""
}
```

#### custom options

> Options created specially for this helper

##### mode
Type: `String`
Default value: `html` (valid modes: `html`|`js`|`css`)

Only necessary if you want to format CSS or JavaScript (e.g. you must specify either `js` or `css` respectively). Example:

```handlebars
{{#prettify mode="js" indent=4}}
function foo(str) {return str;}
{{/prettify}}
```

Assemble options:

```js
assemble: {
  options: {
    prettify: {
      // options for default 'html' mode go here
      js: {
        // options for 'js' mode go here
      },
      css: {
        // options for 'css' mode go here
      }
    }
  }
}
```

##### indent
_Alias for `indent_size`_.
Type: `Number`
Default value: `2`

Number of spaces or tabs to indent the generated code. This option is an _alias for `indent_size`_.

##### condense
Type: `Boolean`
Default value: `true`

Removes extra newlines and retains indenting:

##### padcomments
Type: `Boolean`
Default value: `True`

Add a newline above each code comment:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>

    <!-- code comment -->
    <h1>My Blog</h1>
    <h2>Post of the day</h2>

    <!-- scripts -->
    <a href="#">Read more...</a>
  </body>
</html>
```


## Contributing
Please see the [Contributing to Assemble](http://assemble.io/contributing) guide for information on contributing to this project.

## Author

+ [github.com/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)

## Related Projects and Links

+ [handlebars-helpers](https://github.com/assemble/handlebars-helpers)
+ [helpers](https://github.com/helpers): some great handlebars helpers that we decided not to include in the [handlebars-helpers](https://github.com/assemble/handlebars-helpers) project, most likely because the code footprint was too big or the helper wasn't generic enough.
+ [grunt-prettify](https://github.com/jonschlinkert/grunt-prettify)

## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated on Thu Nov 14 2013 02:25:44._
