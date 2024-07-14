import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.scss']
})
export class CounterControlsComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {

  }

  increment(){
    this.counterService.increment();
  }

  decrement(){
    this.counterService.decrement();
  }

}
