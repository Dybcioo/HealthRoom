import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(section: string){
    console.log(section)
    document.getElementsByTagName(section)[0].scrollIntoView({behavior: 'smooth'});
  }
}
