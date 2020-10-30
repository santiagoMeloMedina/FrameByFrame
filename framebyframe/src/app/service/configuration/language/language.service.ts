import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private current: string = environment.LANGUAGE.DEFAULT;

  constructor() { }

  public setCurrent(language: string): void {
    this.current = language;
  }

  public getCurrent(): string {
    return this.current;
  }

  public getLanguages(): string[] {
    let options: string[] = Object.keys(environment.LANGUAGE);
    let result: string[] = [];
    for (let i = 1; i < options.length; i++) {
      result.push(options[i]);
    }
    return result;
  }

  public get(): Object {
    return environment.LANGUAGE[this.current];
  }
}
