import { Component, Input } from '@angular/core';
import { IAppState } from '../store/app.state';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(private store: Store<{ app: IAppState }>) { }

  counter$ = this.store.select('app').pipe(
    map(e => e.counter)
  );
}
