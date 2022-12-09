import { Component, OnInit } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  exit = faXmark;
  barsOpen = false;
  
  constructor(private scrollToService: ScrollToService) { }

  ngOnInit(): void {
  }

  onNavigate(section: string){

    const config: ScrollToConfigOptions = {
      target: section
    };

    this.scrollToService.scrollTo(config);
    this.barsOpen = false;
  }

  onShowMenu(){
    this.barsOpen = !this.barsOpen;
  }
}
