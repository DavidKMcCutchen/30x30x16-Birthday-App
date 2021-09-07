import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Birthday } from "@birthday-app/api-interfaces";

@Component({
  selector: 'birthday-app-birthday-list',
  templateUrl: './birthday-list.component.html',
  styleUrls: ['./birthday-list.component.scss']
})
export class BirthdayListComponent {
  @Input() birthdays: Birthday[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() birthdayViewed = new EventEmitter();
}
