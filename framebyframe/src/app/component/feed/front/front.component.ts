import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/service/section/section.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(public sectionService: SectionService) { }

  ngOnInit(): void {
  }

}
