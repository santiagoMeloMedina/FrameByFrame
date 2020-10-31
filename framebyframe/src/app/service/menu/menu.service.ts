import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private noBackground: boolean = false;

  constructor() { }

  public enableBack(): void {
    this.noBackground = true;
  }

  public disableBack(): void {
    this.noBackground = false;
  }

  public getBack(): boolean {
    return this.noBackground;
  }
  
}
