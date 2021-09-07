import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Birthday } from "@birthday-app/api-interfaces";
import { BirthdayEnvironment, BIRTHDAY_ENVIRONMENT } from "@birthday-app/environment";


@Injectable({
  providedIn: 'root'
})
export class BirthdaysService {
  model = 'birthdays';

  constructor(
    private httpClient: HttpClient,
    @Inject(BIRTHDAY_ENVIRONMENT) private environment: BirthdayEnvironment
  ) {}

  all() {
    return this.httpClient.get<Birthday[]>(this.getUrl())
  };

  find(birthdayId: string) {
    return this.httpClient.get<Birthday>(this.getUrlById(birthdayId))
  };

  create(birthdays: Birthday) {
    return this.httpClient.post<Birthday>(this.getUrl(), birthdays)
  };

  update(birthdays: Birthday) {
    return this.httpClient.patch<Birthday>(this.getUrlById(birthdays.id), birthdays)
  };

  delete({ id }: Birthday) {
    return this.httpClient.delete<Birthday>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}