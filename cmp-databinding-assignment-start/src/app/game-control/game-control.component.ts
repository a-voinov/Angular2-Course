import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  incrementEvent = new EventEmitter<number>();

  counter: number = 0;
  intervalRef: any;

  constructor() { }

  ngOnInit() {
  }

  startTimer() {
    this.intervalRef = setInterval( () => {
        this.incrementEvent.emit(this.counter++)
      }, 1000
    );
  }

  stopTimer() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

}
