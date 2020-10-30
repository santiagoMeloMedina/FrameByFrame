import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/configuration/language/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit(): void {
  }

}
