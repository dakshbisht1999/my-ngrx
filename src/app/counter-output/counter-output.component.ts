import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {
  count$: Observable<number>;

  constructor(
    private store: Store<{counter: number}> // generic type annotation to tell the ts which reducer are available to access from module.ts
  ) {
    this.count$ = store.select('counter'); // select is used to read the value from the store
  }

}
