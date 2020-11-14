import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/configuration/language/language.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  private selected: string;

  constructor(public language: LanguageService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  public isSelected(key: string): boolean {
    return key == this.selected;
  }

  public selectCategory(key: string): void {
    this.selected = key;
  } 

}
