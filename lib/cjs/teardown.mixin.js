"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeardownableComponent = void 0;
const rxjs_1 = require("rxjs");
function TeardownableComponent(base) {
    class TeardownMixin extends base {
        teardown$ = new rxjs_1.Subject();
        disconnectedCallback() {
            if (super.disconnectedCallback) {
                super.disconnectedCallback();
            }
            this.teardown$.next();
        }
    }
    return TeardownMixin;
}
exports.TeardownableComponent = TeardownableComponent;
