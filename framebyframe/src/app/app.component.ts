import { Component, HostListener } from '@angular/core';
import { CONSTANTS as SCROLL } from 'src/app/constant/scroll.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private simpleLogo: boolean = true;
  title = 'framebyframe';

  public setSimpleLogo(value: boolean): void {
    this.simpleLogo = value;
  }

  public getSimpleLogo(): boolean {
    return this.simpleLogo;
  }

  private determineScrolledSection(scrolled: number): void {
    let scroll: Object = SCROLL[`${scrolled}`];
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log(event.target['scrollingElement'].scrollTop)
  }

}
