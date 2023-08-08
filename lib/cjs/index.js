'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.observe = void 0;
const directive_js_1 = require('lit/directive.js');
const observer_directive_1 = require('./observer-directive');
function observe(source) {
  return (0, directive_js_1.directive)(observer_directive_1.ObserverDirective)(
    source
  );
}
exports.observe = observe;
