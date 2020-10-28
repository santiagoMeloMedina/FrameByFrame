import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      subject: new FormControl(),
      message: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  public getContanctForm(): FormGroup {
    return this.contactForm;
  }

}
