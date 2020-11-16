import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/configuration/language/language.service';
import { Video } from 'src/app/model/video.model';
import { Category } from 'src/app/model/category.model';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  private categories: Category[] = [];
  private category: Category = null;
  private videos: Video[] = [];

  constructor(public language: LanguageService, 
              private dataService: DataService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.setCategories();
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
    this.setVideosByCategory();
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
    this.dataService.getVideosByCategories(this.category).then(result => {
      this.videos = result;
    });
  }

  public getVideosByCategory(): Video[] {
    return this.videos;
  }

}
