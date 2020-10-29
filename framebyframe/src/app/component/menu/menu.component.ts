import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/service/section/section.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private displayMenu: boolean = false;

  constructor(public sectionService: SectionService) { }

  ngOnInit(): void {
  }

  public getDisplayMenu(): boolean {
    return this.displayMenu;
  }

  public closeDisplay(): void {
    this.displayMenu = false;
  }

  public toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
  }

  public getSections(): Object[] {
    return environment.SECTIONS.SECTIONS;
  }

}
