/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/helpers/prettify
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

'use strict';

exports.html = {
  condense: true,
  fixspaces: false,
  indent: 2,
  indent_char: ' ',
  indent_handlebars: false,
  indent_inner_html: true,
  indent_size: 2,
  padcomments: true,
  unformatted: ['code', 'pre', 'em', 'strong']
};


exports.css = {
  end_with_newline: false,
  indent: 2,
  indent_char: ' ',
  indent_size: 2,
  selector_separator: ''
};


exports.js = {
  brace_style: 'collapse',
  break_chained_methods: false,
  eval_code: false,
  indent: 2,
  indent_char: ' ',
  indent_level: 0,
  indent_size: 2,
  indent_with_tabs: false,
  jslint_happy: true,
  keep_array_indentation: false,
  keep_function_indentation: false,
  max_preserve_newlines: 10,
  preserve_newlines: true,
  space_before_conditional: true,
  unescape_strings: false,
  wrap_line_length: 0
};

