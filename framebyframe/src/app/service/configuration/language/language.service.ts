import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private current: string = environment.LANGUAGE.DEFAULT;

  constructor(private cookieService: CookieService) { }

  public setCurrent(language: string): void {
    this.current = language;
    this.cookieService.set("language", this.current);
    window.location.reload();
  }

  public getCurrent(): string {
    let language: string = this.cookieService.get("language");
    if (language == "") {
      this.cookieService.set("language", environment.LANGUAGE.DEFAULT);
      language = environment.LANGUAGE.DEFAULT;
    }
    return language;
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
    return environment.LANGUAGE[this.getCurrent()];
  }
}
