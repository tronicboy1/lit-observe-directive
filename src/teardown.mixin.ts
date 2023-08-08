import {Subject} from 'rxjs';

type Constructor<T = {}> = new (...args: any[]) => T;

interface WebComponentWithPossibleConnectedCallback extends HTMLElement {
  connectedCallback?(): void;
}

export function TeardownableComponent<
  T extends Constructor<WebComponentWithPossibleConnectedCallback>,
>(base: T) {
  class TeardownMixin extends base {
    teardown$ = new Subject<void>();

    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }
      this.teardown$.next();
    }
  }

  return TeardownMixin;
}
