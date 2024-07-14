import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterControlsComponent } from '../counter-controls/counter-controls.component';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  counter: number = 0;
  counterServiceSub?: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterServiceSub = this.counterService.counterChanged.subscribe((newVal: number)=>{
      this.counter = newVal;
    })
  }

  ngOnDestroy(): void{
    if(this.counterServiceSub){
      this.counterServiceSub.unsubscribe();
    }
  }

}
