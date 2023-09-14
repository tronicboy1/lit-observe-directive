import { directive } from 'lit/directive.js';
import { ObserverDirective } from './observer.directive.js';
import { TransitionalObserverDirective } from './transitional-observer.directive.js';
export function observe(source, config) {
    const resolvedConfig = Object.assign({}, { useViewTransitions: false });
    const resolvedClass = resolvedConfig.useViewTransitions
        ? TransitionalObserverDirective
        : ObserverDirective;
    return directive(resolvedClass)(source);
}
export * from './teardown.mixin.js';
