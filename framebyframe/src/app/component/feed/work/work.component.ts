import { Component, ElementRef, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/configuration/language/language.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';
import { Video } from 'src/app/model/video.model';
import { Category } from 'src/app/model/category.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  private videos: Video[] = [];

  private videoElements: Map<number, ElementRef> = new Map();

  constructor(public language: LanguageService, 
              public router: Router, 
              private dataService: DataService) { }

  ngOnInit(): void {
    this.setVideosByCategory();
  }

  public setVideoElement(video: ElementRef, index: number): void {
    if (!this.videoElements.has(index)) {
      this.videoElements.set(index, video);
      this.videoElements.get(index)['muted'] = true;
    }
  }

  public setVideosByCategory(): void {
    let allCategory: Category = new Category().deserealize(environment.DATA.CATEGORY.ALL);
    this.dataService.getVideosByCategories(allCategory, 0, 6).then(result => {
      this.videos = result;
    });
  }

  public getVideosByCategory(): Video[] {
    return this.videos;
  }

}
