import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BIRTHDAY_ENVIRONMENT } from './birthday.token';
import { BirthdayEnvironment } from "./birthday.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: BirthdayEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: BIRTHDAY_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
