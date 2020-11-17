import { Injectable } from '@angular/core';
import { Brand } from 'src/app/model/brand.model';
import { Category } from 'src/app/model/category.model';
import { Video } from 'src/app/model/video.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getCategories(): Promise<Category[]> {
    return new Promise<Category[]>((resolve, reject) => {
      let dos: Category = new Category().deserealize({
        "id": 2,
        "name": "music"
      });
      resolve([dos]);
    });
  }

  public getVideosByCategories(category: Category, start: number, limit: number): Promise<Video[]> {
    return new Promise<Video[]>((resolve, reject) => {
      let uno: Video = new Video().deserealize({
        "id": 1,
        "category": {
          "id": 1,
          "name": "all"
        },
        "content": {
          "src": "assets/videos/front.mp4"
        }
      });
      resolve([uno, uno, uno, uno, uno, uno]);
    });
  }

  public getVideosQuantityOnCategory(category: Category): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      resolve(20);
    });
  }

  public getBrands(): Promise<Brand[]> {
    return new Promise<Brand[]>((resolve, reject) => {
      let uno: Brand = new Brand().deserealize({
        "id": 1,
        "content": {
          "src": "assets/brands/vestiville.png",
          "link": "https://www.google.com"
        }
      });
      resolve([uno, uno, uno, uno, uno]);
    });
  }
}
