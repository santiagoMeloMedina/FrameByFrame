import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private sections: any;
  private scroller: any;

  constructor() { }

  public setScroller(scroller: any): void {
    this.scroller = scroller;
  }

  public setSections(sections: any): void {
    this.sections = sections;
  }

  public scrollTo(name: string): void {
    let sectionPosition: number = this.sections[name]().nativeElement.offsetTop
    this.scroller(sectionPosition);
  }

  public getCurrentSection(): void {
    Object.keys(this.sections).forEach(section => {
      console.log(this.sections[section]().nativeElement.offsetTop);
    });
  }
}
