import { Component, ElementRef, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/configuration/language/language.service';
import { Video } from 'src/app/model/video.model';
import { Category } from 'src/app/model/category.model';
import { DataService } from 'src/app/service/data/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  private categories: Category[] = [];
  private category: Category = null;
  private videos: Video[] = [];
  private limit: number = 0;

  private page: number = 0;

  private videoElements: Map<number, ElementRef> = new Map();

  readonly allCategory: Category = new Category().deserealize(environment.DATA.CATEGORY.ALL);

  constructor(public language: LanguageService, 
              private dataService: DataService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.setCategories();
    this.selectCategory(new Category().deserealize(environment.DATA.CATEGORY.ALL));
  }

  public setLimitOnCategory(): void {
    this.dataService.getVideosQuantityOnCategory(this.category).then(result => {
      this.limit = result;
    })
  }

  public forwardPage(): void {
    if (this.page + environment.VALUES.PAGE_SIZE <= this.limit) {
      this.page += environment.VALUES.PAGE_SIZE;
    } else {
      this.page = this.limit;
    }
    this.setVideosByCategory();
  }

  public backPage(): void {
    if (this.page - environment.VALUES.PAGE_SIZE >= 0) {
      this.page -= environment.VALUES.PAGE_SIZE;
    } else {
      this.page = 0;
    }
    this.setVideosByCategory();
  }

  public canFowardPage(): boolean {
    return this.page < this.limit;
  }

  public canBackPage(): boolean {
    return this.page > 0;
  }

  public setVideoElement(video: ElementRef, index: number): void {
    if (!this.videoElements.has(index)) {
      this.videoElements.set(index, video);
      this.videoElements.get(index)['muted'] = true;
    }
  }

  public categoryIsNull(): boolean {
    return this.category == null;
  }

  public isSelected(category: Category): boolean {
    let result: boolean = false;
    if (this.category != null) {
      result = category.getId() == this.category.getId();
    }
    return result;
  }

  public selectCategory(category: Category): void {
    this.category = category;
    this.page = 0;
    this.setVideosByCategory();
    this.setLimitOnCategory();
  }

  public setCategories(): void {
    this.dataService.getCategories().then(result => {
      this.categories = result;
    });
  }

  public getCategories(): Category[] {
    /// ['All', 'Edit & VFX Only', 'Event Main Promo', 'Event Post Promo', 'Official Music Videos', 'Sweet Sixteen', 'Weddings']
    return this.categories;
  }

  public getVideos(): Video[] {
    return this.videos;
  }

  public setVideosByCategory(): void {
    this.videoElements = new Map();
    this.dataService.getVideosByCategories(this.category, this.page, environment.VALUES.PAGE_SIZE).then(result => {
      this.videos = result;
    });
  }

  public getVideosByCategory(): Video[] {
    return this.videos;
  }

}
