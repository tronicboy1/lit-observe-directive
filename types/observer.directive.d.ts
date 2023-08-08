import { AsyncDirective } from 'lit/async-directive.js';
import type { Observable } from 'rxjs';
import { noChange } from 'lit';
export declare class ObserverDirective<T> extends AsyncDirective {
    private source;
    private disconnected$;
    render(source: Observable<T>): T | typeof noChange;
    protected disconnected(): void;
    protected reconnected(): void;
    private subscribe;
}
