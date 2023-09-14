import {Part} from 'lit';
import {ObserverDirective} from './observer.directive';

/**
 * Directive that uses View Transition API when updating DOM after next event.
 */
export class TransitionalObserverDirective<T> extends ObserverDirective<T> {
  override update(_part: Part, props: unknown[]): unknown {
    const update = super.update.bind(this, ...props);

    if (!('startViewTransition' in document)) {
      update();
      return;
    }

    (document as any).startViewTransition(update);
  }
}
