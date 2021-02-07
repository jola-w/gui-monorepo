import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private language: string;
  constructor() { }

  public setLanguage(language: string) {
    this.language = language;
  }

  public getLanguage() {
    return this.language;
  }
}
