import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  siteKey: string;
  contactForm: FormGroup;

  constructor() {
    this.siteKey = '6LeOBywfAAAAANQUnnz-9k-ZnFSdNzrCty_V16O_';
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "tel": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "treatment": new FormControl(null),
      "treatmentDate": new FormControl(null),
      "message": new FormControl(null)
    });

  }

  onSubmit() {
    console.log(this.contactForm);
  }
}
