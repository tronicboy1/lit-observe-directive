import {Subject} from 'rxjs';

type Constructor<T = {}> = new (...args: any[]) => T;

interface WebComponentWithPossibleConnectedCallback extends HTMLElement {
  disconnectedCallback?(): void;
}

export function TeardownableComponent<
  T extends Constructor<WebComponentWithPossibleConnectedCallback>,
>(base: T) {
  class TeardownMixin extends base {
    teardown$ = new Subject<void>();

    disconnectedCallback() {
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
      this.teardown$.next();
    }
  }

  return TeardownMixin;
}
