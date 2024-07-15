import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { counterReducer } from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { // Store 1
      counter: counterReducer,
      // auth: authReducer,
      },
      { // Store 2

      }
    ),
    EffectsModule.forRoot([])
  ],
  // exports: [
  //   CounterControlsComponent
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
