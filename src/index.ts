import {directive} from 'lit/directive.js';
import {Observable} from 'rxjs';
import {ObserverDirective} from './observer.directive.js';

export function observe<T>(source: Observable<T>) {
  return directive(ObserverDirective<T>)(source);
}

export * from './teardown.mixin.js';
