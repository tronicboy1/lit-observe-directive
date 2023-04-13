# License

Distributed under the MIT license.

# About this package

This is a directive for [Lit](https://lit.dev/) that allows you to subscribe to [RxJS](https://rxjs.dev/) observables in html template literals.

# Usage

```typescript
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { map, scan } from "rxjs";
import { webSocket } from "rxjs/webSocket";
import { observe } from "@tronicboy/lit-observe-directive";

const tagName = "wc-lit-websocket";

@customElement(tagName)
export class WcLitWebsocket extends LitElement {
  private socket$ = webSocket<string>({
    url: "ws://localhost:5200",
    protocol: "echo-protocol",
  });
  private messages$ = this.socket$.pipe(scan((acc, message) => [message, ...acc], [] as string[]));

  render() {
    return html`
      <ul>
        ${observe(this.messages$.pipe(map((messages) => messages.map((message) => html`<li>${message}</li>`))))}
      </ul>`;
  }
}
```

Little bit cluttered but it gets the job done.
