import {directive} from 'lit/directive.js';
import {Observable} from 'rxjs';
import {ObserverDirective} from './observer.directive.js';
import {TransitionalObserverDirective} from './transitional-observer.directive.js';

type Config = {
  useViewTransitions: boolean;
};

export function observe<T>(source: Observable<T>, config?: Config) {
  const resolvedConfig: Config = Object.assign<any, Config>(
    {},
    {useViewTransitions: false}
  );

  const resolvedClass = resolvedConfig.useViewTransitions
    ? TransitionalObserverDirective<T>
    : ObserverDirective<T>;

  return directive(resolvedClass)(source);
}

export * from './teardown.mixin.js';
