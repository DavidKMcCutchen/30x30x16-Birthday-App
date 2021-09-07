import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Birthday, emptyBirthday } from '@birthday-app/api-interfaces';
import { BirthdayFacade } from '@birthday-app/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'birthday-app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss']
})
export class BirthdaysComponent implements OnInit {
  allBirthdays$: Observable<Birthday[]> = this.birthdayFacade.allBirthdays$;
  selectedBirthday$: Observable<Birthday> = this.birthdayFacade.selectedBirthdays$;

  form: FormGroup;

  constructor(
    private birthdayFacade: BirthdayFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.birthdayFacade.mutations$.subscribe((_) => this.resetBirthday());
  }

  ngOnInit() {
    this.initForm();
    this.birthdayFacade.loadBirthdays();
    this.resetBirthday()

    const birthdayRouteId = this.route.snapshot.params['id'];

    if (birthdayRouteId) {
      this.loadBirthday((birthdayRouteId))
    }
  }

  viewBirthday(birthdayId: string) {
    this.router.navigate(["birthdays", birthdayId])
  }

  loadBirthday(birthdayId: string) {
    this.birthdayFacade.selectBirthday(birthdayId);
    this.birthdayFacade.loadBirthday(birthdayId);
  }

  selectBirthday(birthday: Birthday) {
    this.birthdayFacade.selectBirthday(birthday.id)
    this.form.patchValue(birthday);
  }

  saveBirthday(birthday: Birthday) {
    this.birthdayFacade.saveBirthday(birthday);
  }

  deleteBirthday(birthday: Birthday) {
    this.birthdayFacade.deleteBirthday(birthday);
  }

  resetBirthday() {
    this.form.reset();
    this.selectBirthday(emptyBirthday)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [''],
      age: [''],
      plans: [''],
      message: ['']
    })
  }
}
