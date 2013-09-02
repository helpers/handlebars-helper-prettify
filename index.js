/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/helpers/prettify
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

var _ = require('lodash');

module.exports.register = function(Handlebars, options) {
  var prettify = require('js-beautify').html;

  var condense = function(str) {
    return str.replace(/(\n|\r){2,}/g, '\n');
  };

  var padcomments = function(str) {
    return str.replace(/(\s*<!--)/g, '\n$1');
  };

  var fixspaces = function(str) {
    return str.replace(/(<\/(a|span|strong|h1|h2|h3|h4|h5|h6)>(?!(,|\.|!|\?|;|:)))/g, '$1 ');
  };

  /**
   * Default options passed to js-beautify.
   * @param {hash arguments} [Options received as hash arguments will override defaults.]
   * @param {task options}   [Options defined in the task/target override hash arguments.]
   */
  var defaults = {};
  var assembleOptions = options;
  defaults = _.extend(assembleOptions.prettify, defaults);
  defaults.indent_size = defaults.indent;

  /**
   * Prettify HTML output
   * @example:
   *   {{#prettify indent="2"}}
   *     {{> body }}
   *   {{/prettify}}
   */
  Handlebars.registerHelper('prettify', function (options) {
    var hash = _.extend(options.hash, assembleOptions.prettify);
    var content = prettifyHTML(options.fn(this), hash);

    // Reduce multiple newlines to a single newline
    if(assembleOptions.prettify.condense === true) {
      content = condense(content);
    }
    // Add a single newline above code comments.
    if(assembleOptions.prettify.padcomments === true) {
      content = padcomments(content);
    }

    return fixspaces(content);
  });

  /**
   * Format HTML with js-beautify, pass in options.
   * @param   {String} source  [The un-prettified HTML.]
   * @param   {Object} options [Object of options passed to js-beautify.]
   * @returns {String}         [Stunning HTML.]
   */
  var prettifyHTML = function(source, options) {
    options = options || {};
    try {
      return prettify(source, {
      indent_size:       options.indent            || 2,
      indent_char:       options.indent_char       || ' ',
      indent_inner_html: options.indent_inner_html || true,
      unformatted:       options.unformatted       || ['code', 'pre', 'em', 'strong']
    });
    } catch (e) {
      console.error(e);
      console.warn('HTML beautification failed.');
    }
  };
};

