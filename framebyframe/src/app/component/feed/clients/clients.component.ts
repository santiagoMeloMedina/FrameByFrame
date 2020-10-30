import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  private brands: Object[];

  constructor() { }

  ngOnInit(): void {
    this.setBrands();
  }

  public setBrands(): void {
    this.brands = [
      { src: "assets/brands/vestiville.png", link: "https://www.google.com"},
      { src: "assets/brands/vestiville.png", link: "https://www.google.com"},
      { src: "assets/brands/vestiville.png", link: "https://www.google.com"},
      { src: "assets/brands/vestiville.png", link: "https://www.google.com"},
      { src: "assets/brands/vestiville.png", link: "https://www.google.com"},
      { src: "assets/brands/vestiville.png", link: "https://www.google.com"}
    ];
  }

  public getBrands(): Object[] {
    let result: Object[] = [];
    let maxlen: number = this.brands.length > environment.VALUES.MAX_CLIENTS ? environment.VALUES.MAX_CLIENTS : this.brands.length;
    for (let i = 0; i < maxlen; i++) {
      result.push(this.brands[i]);
    }
    return result;
  }

}
