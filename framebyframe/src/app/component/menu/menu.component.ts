import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/service/section/section.service';
import { environment } from 'src/environments/environment';
import { LanguageService } from 'src/app/service/configuration/language/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private displayMenu: boolean = false;
  private displayLanguages: boolean = false;

  constructor(public sectionService: SectionService, 
              public language: LanguageService) { }

  ngOnInit(): void {
  }

  public getDisplayLanguages(): boolean {
    return this.displayLanguages;
  }

  public getDisplayMenu(): boolean {
    return this.displayMenu;
  }

  public closeDisplay(): void {
    this.displayMenu = false;
  }

  public chooseLanguage(language: string) {
    this.displayLanguages = false;
    this.language.setCurrent(language);
  }

  public toggleLanguageDisplay(): void {
    this.displayMenu = false;
    this.displayLanguages = !this.displayLanguages;
  }

  public toggleMenu(): void {
    this.displayLanguages = false;
    this.displayMenu = !this.displayMenu;
  }

  public getSections(): Object[] {
    return environment.SECTIONS.SECTIONS;
  }

  public goToSection(key: string): void {
    this.sectionService.scrollTo(key);
    this.closeDisplay();
  }

}
