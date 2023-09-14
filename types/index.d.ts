import { Observable } from 'rxjs';
import { TransitionalObserverDirective } from './transitional-observer.directive.js';
type Config = {
    useViewTransitions: boolean;
};
export declare function observe<T>(source: Observable<T>, config?: Config): import("lit-html/directive.js").DirectiveResult<{
    new (_partInfo: import("lit-html/directive.js").PartInfo): TransitionalObserverDirective<T>;
}>;
export * from './teardown.mixin.js';
