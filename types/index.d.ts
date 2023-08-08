import { Observable } from 'rxjs';
import { ObserverDirective } from './observer.directive.js';
export declare function observe<T>(source: Observable<T>): import("lit-html/directive.js").DirectiveResult<{
    new (_partInfo: import("lit-html/directive.js").PartInfo): ObserverDirective<T>;
}>;
export * from './teardown.mixin.js';
