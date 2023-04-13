import { directive } from "lit/directive.js";
import { AsyncDirective } from "lit/async-directive.js";
import { Subject, takeUntil } from "rxjs";
import { noChange } from "lit";
export class ObserverDirective extends AsyncDirective {
    source;
    disconnected$ = new Subject();
    render(source) {
        this.source = source.pipe(takeUntil(this.disconnected$));
        this.subscribe();
        return noChange;
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
export function observe(source) {
    return directive((ObserverDirective))(source);
}
