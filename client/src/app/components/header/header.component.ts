import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit(): void {
  }

  onNavigate(section: string){

    const config: ScrollToConfigOptions = {
      target: section
    };

    this.scrollToService.scrollTo(config);
    //document.getElementsByTagName(section)[0].scrollIntoView({behavior: 'smooth'});
  }
}
