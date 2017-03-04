// Generated by CoffeeScript 1.12.4
var print, util,
  slice = [].slice;

util = require('util');

exports.flatten = function(ls) {
  var flat, i, j, k, l, len, len1;
  flat = [];
  for (j = 0, len = ls.length; j < len; j++) {
    l = ls[j];
    for (k = 0, len1 = l.length; k < len1; k++) {
      i = l[k];
      flat.push(i);
    }
  }
  return flat;
};

exports.randomChoice = function(l) {
  return l[Math.floor(Math.random() * l.length)];
};

exports.capitalize = function(s) {
  if (s.length) {
    return s[0].toUpperCase() + s.slice(1);
  } else {
    return '';
  }
};

exports.countIndentation = function(s) {
  var c, i, j, len, ref;
  i = 0;
  ref = s.split('');
  for (j = 0, len = ref.length; j < len; j++) {
    c = ref[j];
    if (c === ' ') {
      i += 1;
    } else {
      break;
    }
  }
  s = s.slice(i);
  return [i / 4, s];
};

exports.isALine = function(arg) {
  var i, s;
  i = arg[0], s = arg[1];
  return s.length > 0;
};

exports.splitToken = function(token) {
  return token.split('|');
};

exports.fixCapitalization = function(s) {
  return s = s.split(/([.!?] )/).map(exports.capitalize).join('');
};

exports.fixPunctuation = function(s) {
  s = s.replace(/\s+/g, ' ');
  s = s.replace(/\ ([,.!?])/g, '$1');
  return s;
};

exports.asSentence = function(tokens) {
  return exports.fixCapitalization(exports.fixPunctuation(tokens.join(' ')));
};

exports.inspect = function(o) {
  return util.inspect(o, {
    colors: true,
    depth: null
  });
};

print = function() {
  var o, o_string;
  o = 1 <= arguments.length ? slice.call(arguments, 0) : [];
  if (o.length > 1) {
    if (typeof o[0] === 'string') {
      console.log("[" + o[0] + "]");
      o.shift();
    }
    o_string = o.map(exports.inspect).join('\n    ');
  } else {
    o_string = exports.inspect(o[0]);
  }
  return console.log('    ' + o_string);
};