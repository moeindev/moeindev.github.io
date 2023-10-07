import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  public summary =
    "Hey there! I'm Moein, a full-time front-end developer with a solid 7 years of experience under my belt. I used to work on mobile apps using Kotlin and Swift, but now I'm all about web applications with Angular. Over the years, I've had the privilege of helping numerous companies boost their business.\n" +
    '\n' +
    "I take pride in my ability to deliver top-notch solutions that go beyond client expectations. Whether it's crafting user-friendly interfaces or staying on top of the latest industry trends, I'm always striving for excellence. My technical skills, combined with effective communication and problem-solving abilities, have proven to be a winning combination in driving business growth.";
}
