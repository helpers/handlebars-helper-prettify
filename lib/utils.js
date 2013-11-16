/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/helpers/prettify
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */


exports.condense = function(str) {
  return str.replace(/(\n|\r){2,}/g, '\n');
};
//
exports.padcomments = function(str) {
  return str.replace(/(\s*(?:<!--|\/\*)\s*)(?:(?!.+(\s*(?:<!--|\/\*)\s*)))/g, '\n$1');
};

exports.fixspaces = function(str) {
  return str.replace(/(<\/(a|span|strong|h1|h2|h3|h4|h5|h6)>(?!(,|\.|!|\?|;|:)))/g, '$1 ');
};
