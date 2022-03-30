import { Component, OnInit } from '@angular/core';

import { RecaptchaErrorParameters } from 'ng-recaptcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  siteKey: string;
  constructor() {
    this.siteKey = '6LeOBywfAAAAANQUnnz-9k-ZnFSdNzrCty_V16O_';
  }

  ngOnInit(): void {}

  onSubmit() {}
}
