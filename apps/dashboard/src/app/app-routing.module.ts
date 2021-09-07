import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { LoginComponent, WildComponent } from "@birthday-app/ui-login";
import { BirthdayComponent } from './birthday/birthday.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'birthdays', component: BirthdaysComponent},
  {path: 'birthdays/:id', component: BirthdayComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }