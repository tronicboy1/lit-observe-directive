"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.observe = void 0;
const directive_js_1 = require("lit/directive.js");
const observer_directive_js_1 = require("./observer.directive.js");
const transitional_observer_directive_js_1 = require("./transitional-observer.directive.js");
function observe(source, config) {
    const resolvedConfig = Object.assign({}, { useViewTransitions: false });
    const resolvedClass = resolvedConfig.useViewTransitions
        ? transitional_observer_directive_js_1.TransitionalObserverDirective
        : observer_directive_js_1.ObserverDirective;
    return (0, directive_js_1.directive)(resolvedClass)(source);
}
exports.observe = observe;
__exportStar(require("./teardown.mixin.js"), exports);
