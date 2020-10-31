import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/service/section/section.service';
import { environment } from 'src/environments/environment';
import { LanguageService } from 'src/app/service/configuration/language/language.service';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/service/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private displayMenu: boolean = false;
  private displayLanguages: boolean = false;

  constructor(public sectionService: SectionService, 
              public language: LanguageService, 
              public router: Router, 
              public menuService: MenuService) { }

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

  public lowerCased(str: string): string {
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
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
    this.menuService.enableBack();
    this.router.navigateByUrl("").then(finish => {
      setTimeout(() => {
        this.sectionService.scrollTo(key);
        this.closeDisplay();
      }, 500);
    })
  }

}
