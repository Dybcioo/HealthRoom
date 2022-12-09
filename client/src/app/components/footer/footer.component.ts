import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagramSquare;
  constructor() { }
  ngOnInit(): void {
  }

}
