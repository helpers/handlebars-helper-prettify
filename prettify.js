/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/helpers/prettify
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

'use strict';

var _ = require('lodash');
var engineOpts = require('./lib/defaults');

exports.condense = function(str) {
  return str.replace(/(\n|\r){2,}/g, '\n');
};

exports.padcomments = function(str) {
  return str.replace(/(\s*<!--)/g, '\n$1');
};

exports.fixspaces = function(str) {
  return str.replace(/(<\/(a|span|strong|h1|h2|h3|h4|h5|h6)>(?!(,|\.|!|\?|;|:)))/g, '$1 ');
};

module.exports.register = function (Handlebars, options) {

  // If the 'assemble.options' object exists, use it. Otherwise use an empty object.
  var assembleOptions = options || {};

  /**
   * Prettify
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  Handlebars.registerHelper('prettify', function (options) {
    var opts = {};
    var content = options.fn(this);

    // Prettify using js, CSS or HTML mode. 'html' is the default.
    function prettifyBasedOnMode() {
      opts.mode = options.hash.mode || assembleOptions.prettify.mode || 'html';
      assembleOptions.prettify = (opts.mode === 'html') ? assembleOptions.prettify : assembleOptions.prettify[opts.mode];
      opts = _.defaults(options.hash, _.extend({}, opts, engineOpts[opts.mode], assembleOptions.prettify));
      opts.indent_size = opts.indent;
      content = require('js-prettify')[opts.mode](content, opts);
    }

    // Make it so.
    prettifyBasedOnMode();

    // Clean up new lines after prettification.
    if(opts.mode === 'html') {
      // Reduce multiple newlines to a single newline
      content = (opts.exports.condense === true) ? exports.condense(content) : content;
      // Add a single newline above code comments.
      content = (opts.padcomments === true) ? exports.padcomments(content) : content;
    }

    return new Handlebars.SafeString(exports.fixspaces(content));
  });
};