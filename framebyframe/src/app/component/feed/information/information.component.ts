import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/configuration/language/language.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit(): void {
  }

}
