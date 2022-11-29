import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  siteKey: string;
  contactForm: FormGroup;
  tokenVisible: boolean = false;

  constructor(private reCaptchaV3Service: ReCaptchaV3Service, private toastr: ToastrService) {
    this.siteKey = '6LdSQz8jAAAAAIKpenHzsvw0VKshHOo4Ju2_Be2x';
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
    if(!this.contactForm.valid){
      this.contactForm.markAllAsTouched();
      this.contactForm.updateValueAndValidity();
      return;
    }
    this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      this.tokenVisible = true;
    }, {
        useGlobalDomain: false
    });

    if(this.tokenVisible){
      this.toastr.success("Wiadomość wysłana pomyślnie. Dziękujemy za kontakt!");
      console.log(this.contactForm);
    }
    else{

    }
  }
}
