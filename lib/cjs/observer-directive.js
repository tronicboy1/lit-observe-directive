"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverDirective = void 0;
const async_directive_js_1 = require("lit/async-directive.js");
const rxjs_1 = require("rxjs");
const lit_1 = require("lit");
class ObserverDirective extends async_directive_js_1.AsyncDirective {
    source;
    disconnected$ = new rxjs_1.Subject();
    render(source) {
        this.source = source.pipe((0, rxjs_1.takeUntil)(this.disconnected$));
        this.subscribe();
        return lit_1.noChange;
    }
    disconnected() {
        this.disconnected$.next();
    }
    reconnected() {
        this.subscribe();
    }
    subscribe() {
        if (!this.isConnected)
            return;
        this.source.subscribe({
            next: (val) => this.setValue(val),
            error: (err) => console.error(err),
        });
    }
}
exports.ObserverDirective = ObserverDirective;
