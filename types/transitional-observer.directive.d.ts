import { Part } from 'lit';
import { ObserverDirective } from './observer.directive';
/**
 * Directive that uses View Transition API when updating DOM after next event.
 */
export declare class TransitionalObserverDirective<T> extends ObserverDirective<T> {
    update(_part: Part, props: unknown[]): unknown;
}
