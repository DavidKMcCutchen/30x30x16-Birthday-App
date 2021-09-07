import { Component } from '@angular/core';

@Component({
  selector: 'birthday-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Birthdays';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'birthdays', icon: 'view_list', title: 'Birthdays'}
  ]
}
