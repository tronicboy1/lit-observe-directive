import { Subject } from 'rxjs';
export function TeardownableComponent(base) {
    class TeardownMixin extends base {
        teardown$ = new Subject();
        connectedCallback() {
            if (super.connectedCallback) {
                super.connectedCallback();
            }
            this.teardown$.next();
        }
    }
    return TeardownMixin;
}
