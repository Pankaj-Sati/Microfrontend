import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App2';
  constructor(public router:Router)
  {
    
    this.router.initialNavigation();
    this.router.events.subscribe(event=>
      {
        if(event instanceof NavigationEnd)
        {
          console.log('Navigation Ended', event.url);
        }
      })
  }
}
