import { directive } from 'lit/directive.js';
import { ObserverDirective } from './observer.directive.js';
export function observe(source) {
    return directive((ObserverDirective))(source);
}
export * from './teardown.mixin.js';
