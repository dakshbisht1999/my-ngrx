import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;

  constructor(
    private store: Store<{counter: number}> // generic type annotation to tell the ts which reducer are available to access from module.ts
  ) {
    this.count$ = store.select(selectCount); // select is used to read the value from the store
    this.doubleCount$ = store.select(selectDoubleCount);
  }

}
