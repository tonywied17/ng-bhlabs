import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDesktop!: boolean;
  title = 'bhlabs';

  constructor() {
  }

  ngOnInit() {
    this.isDesktop = window.innerWidth >= 1024; // Set the breakpoint according to your desired desktop view width
    window.addEventListener('resize', this.onResize);
  }

  toggleDrawer() {
    this.isDesktop = !this.isDesktop;
  }
  
  onResize = () => {
    this.isDesktop = window.innerWidth >= 1024; // Update the isDesktop property on window resize
  }
}
