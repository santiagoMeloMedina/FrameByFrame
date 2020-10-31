import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LanguageService } from 'src/app/service/configuration/language/language.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private contactForm: FormGroup;

  constructor(public language: LanguageService) {
    this.contactForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      subject: new FormControl(),
      message: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  public getLinks(): Object {
    return environment.LINK;
  }

  public getContanctForm(): FormGroup {
    return this.contactForm;
  }

}
