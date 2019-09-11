export class CounterService {
  
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  incActiveToInactive() {
    this.activeToInactiveCounter++;
  }

  incInactiveToActive() {
    this.inactiveToActiveCounter++;
  }

}