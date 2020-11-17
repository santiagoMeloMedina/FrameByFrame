import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from 'src/app/model/brand.model';
import { Data } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  private brands: Brand[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.setBrands();
  }

  public setBrands(): void {
    this.dataService.getBrands().then(result => {
      this.brands = result;
    });
  }

  public getBrands(): Brand[] {
    let result: Brand[] = [];
    let maxlen: number = this.brands.length > environment.VALUES.MAX_CLIENTS ? environment.VALUES.MAX_CLIENTS : this.brands.length;
    for (let i = 0; i < maxlen; i++) {
      result.push(this.brands[i]);
    }
    return result;
  }

}
