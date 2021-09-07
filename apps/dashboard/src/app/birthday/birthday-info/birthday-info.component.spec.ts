import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayInfoComponent } from './birthday-info.component';

describe('BirthdayInfoComponent', () => {
  let component: BirthdayInfoComponent;
  let fixture: ComponentFixture<BirthdayInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
