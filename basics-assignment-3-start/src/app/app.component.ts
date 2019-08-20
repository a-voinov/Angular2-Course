import { Component } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {

  isParagraphVisible = false;
  clicks: number = 0;
  clickLog = [];

  onClick() {
    // toggle paragraph visibility
    this.isParagraphVisible = !this.isParagraphVisible;
    // format current timestamp
    const currentDate = formatDate(new Date(), 'yyyy/MM/dd HH:mm:ss', 'en');
    // increment count of clicks to be logged
    this.clicks++;
    // push element in front of array
    this.clickLog.unshift(
      {
        log: ' click [' + this.clicks + '] ' + currentDate,
        // let's pretend we don't know how to get loop index
        index: this.clicks
      }
    );
  }

}
