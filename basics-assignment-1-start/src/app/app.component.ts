import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-success-alert></app-success-alert>
    <app-warning-alert></app-warning-alert>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
