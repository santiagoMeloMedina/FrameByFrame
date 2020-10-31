import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/configuration/language/language.service';
import { MenuService } from 'src/app/service/menu/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(public language: LanguageService, 
              public menuService: MenuService, 
              public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.menuService.disableBack();
    }, 10);
    window.scrollTo(0, 0);
  }

}
