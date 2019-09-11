import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private counterService: CounterService) {}

  get incativeToActiveCounter() {
    return this.counterService.inactiveToActiveCounter;
  }

  get ativeToInactiveCounter() {
    return this.counterService.activeToInactiveCounter;
  }

}
