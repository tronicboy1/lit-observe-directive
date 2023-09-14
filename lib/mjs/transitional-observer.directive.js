import { ObserverDirective } from './observer.directive';
/**
 * Directive that uses View Transition API when updating DOM after next event.
 */
export class TransitionalObserverDirective extends ObserverDirective {
    update(_part, props) {
        const update = super.update.bind(this, ...props);
        if (!('startViewTransition' in document)) {
            update();
            return;
        }
        document.startViewTransition(update);
    }
}
