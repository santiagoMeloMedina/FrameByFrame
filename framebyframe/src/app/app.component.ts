import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MenuComponent } from 'src/app/component/menu/menu.component';
import { environment } from 'src/environments/environment';
import { LanguageService } from 'src/app/service/configuration/language/language.service';
import { MenuService } from 'src/app/service/menu/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private followHeader: boolean = false;
  private currentSection: string = "";

  @ViewChild('menuChild') menuChild:MenuComponent;
  @ViewChild('menuChildFollow') menuChildFollow:MenuComponent;

  constructor(public language: LanguageService, 
              public menuService: MenuService, 
              public router: Router) {}

  ngOnInit() {
    if (this.router.url == "/") {
      this.menuService.enableBack();
    }
  }
  
  title = 'framebyframe';

  public goHome(): void {
    this.menuService.enableBack();
    this.router.navigateByUrl('');
  }

  public setFollowHeader(value: boolean): void {
    this.followHeader = value;
  }

  public getFollowHeader(): boolean {
    return this.followHeader;
  }

  private changeSection(section: Object): boolean {
    let changed: boolean = section["name"] != this.currentSection;
    this.currentSection = section["name"];
    return changed;
  }

  private menuSectionAction(section: Object): void {
    this.menuChild.closeDisplay();
    this.menuChildFollow.closeDisplay();
    if (section['name'] == environment.SCROLL["0-125"]['name']){
      this.setFollowHeader(false);
    } else {
      this.setFollowHeader(true);
    }
  }

  private determineScrolledSection(scrolled: number): void {
    let section: string = Object.keys(environment.SCROLL).filter(range => {
      let nums: number[] = range.split("-").map(num => {
        return parseFloat(num);
      });
      return scrolled >= nums[0] && scrolled <= nums[1];
    })[0];
    let changed: boolean = this.changeSection(environment.SCROLL[section]);
    if (changed) {
      this.menuSectionAction(environment.SCROLL[section]);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let scroller: any = event.target['scrollingElement'];
    this.determineScrolledSection(scroller.scrollTop);
  }
}
