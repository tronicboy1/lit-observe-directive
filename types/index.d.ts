import { Observable } from 'rxjs';
import { ObserverDirective } from './observer-directive';
export declare function observe<T>(source: Observable<T>): import("lit-html/directive").DirectiveResult<{
    new (_partInfo: import("lit-html/directive").PartInfo): ObserverDirective<T>;
}>;
