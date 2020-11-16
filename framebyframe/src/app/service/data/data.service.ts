import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Video } from 'src/app/model/video.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getCategories(): Promise<Category[]> {
    return new Promise<Category[]>((resolve, reject) => {
      let uno: Category = new Category().deserealize({
        "id": 1,
        "name": "all"
      });
      let dos: Category = new Category().deserealize({
        "id": 2,
        "name": "music"
      });
      resolve([uno, dos]);
    });
  }

  public getVideosByCategories(category: Category): Promise<Video[]> {
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
}
