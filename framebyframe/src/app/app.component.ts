import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, HostListener, ViewChild } from '@angular/core';
import { CONSTANTS as SCROLL } from 'src/app/constant/scroll.constant';
import { MenuComponent } from './component/menu/menu.component';

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
  
  title = 'framebyframe';

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
    if (section['name'] == SCROLL["0-125"]['name']){
      this.setFollowHeader(false);
    } else {
      this.setFollowHeader(true);
    }
  }

  private determineScrolledSection(scrolled: number): void {
    let section: string = Object.keys(SCROLL).filter(range => {
      let nums: number[] = range.split("-").map(num => {
        return parseFloat(num);
      });
      return scrolled >= nums[0] && scrolled <= nums[1];
    })[0];
    let changed: boolean = this.changeSection(SCROLL[section]);
    if (changed) {
      this.menuSectionAction(SCROLL[section]);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let scroller: any = event.target['scrollingElement'];
    this.determineScrolledSection(scroller.scrollTop);
  }

}
