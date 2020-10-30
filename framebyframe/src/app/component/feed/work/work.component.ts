import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/configuration/language/language.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit(): void {
  }

}
