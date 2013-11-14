/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/helpers/prettify
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */


// node_modules
var _ = require('lodash');
var prettifyHTML = require('js-beautify').html;

// Local utils.
var defaults = require('./lib/defaults');
var Utils    = require('./lib/utils');


module.exports.register = function (Handlebars, options, params) {
  'use strict';

  var opts = options || {};
  opts.prettify = opts.prettify || {};


  Handlebars.registerHelper('prettify', function(options) {
    options = options || {};
    var hash = options.hash || {};

    // Pass an object to the hash. E.g: `{{#prettify opts=foo}}
    hash.opts = hash.opts || {};

    // Define the mode in which to run prettify: 'html', 'css' or 'js'
    var mode = hash.mode || 'html';
    if(mode === 'css' || mode === 'js') {
      opts.prettify = opts.prettify[mode] || {};
    }

    // Extend options
    options = _.extend(options, defaults[mode], opts.prettify, hash, hash.opts);
    var content = options.fn(this);

    // Alias for indent_size
    options.indent_size = options.indent;

    // Run js-beautify before cleaning up newlines below.
    content = require('js-beautify')[mode](content, options);

    // Clean up newlines, spacing
    if(options.condense === true || options.condense === 'true') {
      content = Utils.condense(content);
    }
    if(options.padcomments === true || options.padcomments === 'true') {
      content = Utils.padcomments(content);
    }
    if (mode === 'html') {
      if(options.fixspaces === true || options.fixspaces === 'true') {
        content = Utils.fixspaces(content);
      }
    }
    return new Handlebars.SafeString(content);
  });
};