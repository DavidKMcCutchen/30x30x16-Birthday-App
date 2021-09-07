import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { BirthdayDetailsComponent } from './birthdays/birthday-details/birthday-details.component';
import { BirthdayListComponent } from './birthdays/birthday-list/birthday-list.component';
import { MaterialModule } from "@birthday-app/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@birthday-app/core-data";
import { CoreStateModule } from "@birthday-app/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@birthday-app/environment';
import { UiLoginModule } from '@birthday-app/ui-login';
import { BirthdayComponent } from './birthday/birthday.component';
import { BirthdayInfoComponent } from './birthday/birthday-info/birthday-info.component';

@NgModule({
  declarations: [AppComponent, BirthdaysComponent, BirthdayDetailsComponent, BirthdayListComponent, BirthdayInfoComponent, BirthdayComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}