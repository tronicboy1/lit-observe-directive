import { Subject } from 'rxjs';
export function TeardownableComponent(base) {
    class TeardownMixin extends base {
        teardown$ = new Subject();
        disconnectedCallback() {
            if (super.disconnectedCallback) {
                super.disconnectedCallback();
            }
            this.teardown$.next();
        }
    }
    return TeardownMixin;
}
