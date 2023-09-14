"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionalObserverDirective = void 0;
const observer_directive_1 = require("./observer.directive");
/**
 * Directive that uses View Transition API when updating DOM after next event.
 */
class TransitionalObserverDirective extends observer_directive_1.ObserverDirective {
    update(_part, props) {
        const update = super.update.bind(this, ...props);
        if (!('startViewTransition' in document)) {
            update();
            return;
        }
        document.startViewTransition(update);
    }
}
exports.TransitionalObserverDirective = TransitionalObserverDirective;
