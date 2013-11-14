## HTML Options

```js
var options = {
  brace_style: 'expand',
  indent_char: ' ',
  indent_handlebars: false,
  indent_inner_html: false,
  indent_scripts: 'normal',
  indent_size: 2,
  max_preserve_newlines: 5,
  preserve_newlines: true,
  unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u'],
  wrap_line_length: 78
};
```

### brace_style
Type: `String`
Default: `collapse` (Options: `collapse`|`expand`|`end-expand`)

Put braces on the same line as control statements, or put braces on own line (Allman / ANSI style), or just put end braces on own line.


### indent
Type: `Number`
Default: `space`:

Alias for `indent_size`.


### indent_char
Type: `String`
Default: `space`:

Character to indent with.


### indent_inner_html
Type: `Boolean`
Default: `false`

Indent `<head>` and `<body>` sections.


### indent_handlebars
Type: `Boolean`
Default: `false`

Format and indent `{{#foo}}` and `{{/foo}}`.


### indent_scripts
Type: `String`
Default: `normal` (Options: `keep`|`separate`|`normal`)


### indent_size
Type: `Number`
Default: `2`:

Indentation size.


### max_preserve_newlines
Type: `String`
Default: `unlimited`

Number of line breaks to be preserved in one chunk.


### preserve_newlines
Type: `Boolean`
Default: `true`

Whether or not existing line breaks before elements should be preserved Only works before elements, not inside tags or for text.


### unformatted
Type: `String`
Default: `['code', 'pre', 'em', 'strong']`

List of tags, that shouldn't be reformatted.


### wrap_line_length
Type:
Default: `0`:

Maximum amount of characters per line (`0` = disable).

