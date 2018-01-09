import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <p  [@myAwesomeAnimation]="state" (click)="animateMe()">I will animate</p>
  `,
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
        style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
      ])))

    ]),
  ]
})
export class AppComponent {
  state = 'small';
  titlestyles = {
    'color': 'red',
    'font-size': '4em'
  };
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
