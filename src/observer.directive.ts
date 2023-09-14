import {AsyncDirective, Part} from 'lit/async-directive.js';
import {Subject, takeUntil} from 'rxjs';
import type {Observable} from 'rxjs';
import {noChange} from 'lit';

export class ObserverDirective<T> extends AsyncDirective {
  private source!: Observable<T>;
  private disconnected$ = new Subject<void>();

  render(source: Observable<T>): T | typeof noChange {
    this.source = source.pipe(takeUntil(this.disconnected$));
    this.subscribe();
    return noChange;
  }

  protected disconnected(): void {
    this.disconnected$.next();
  }

  protected reconnected(): void {
    this.subscribe();
  }

  private subscribe(): void {
    if (!this.isConnected) return;
    this.source.subscribe({
      next: val => this.setValue(val),
      error: err => console.error(err),
    });
  }
}
