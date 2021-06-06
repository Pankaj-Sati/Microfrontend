import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App2';
  constructor(public router:Router,
    private platformLocation:PlatformLocation)
  {
    
    // this.router.initialNavigation();
    this.router.events.subscribe(event=>
      {
        if(event instanceof NavigationEnd)
        {
          this.platformLocation.getBaseHrefFromDOM();
          console.log('Navigation Ended', event.url);
          console.log('platformLocation base HREF', this.platformLocation.getBaseHrefFromDOM());
          const customEv=new CustomEvent('internalAppNavigation',{
            detail:
            {
              app:'app2',
              url:event.url,
              event:event
            }
            });
            window.dispatchEvent(customEv);
        }
      });
  }

  @HostListener('window:externalAppNavigation',['$event'])
  onAppNavigated(event)
  {
    //Called when the app will be navigated
    console.log('externalAppNavigation received in App2',event);
    if(event && event.detail && event.detail?.app==="app2" && this.router.url!=="/home")
    {
      console.log('Inside if url=',this.router.url);
      if(event.detail?.url==="")
      {
        this.router.navigate(["/"]);
      }else{
        this.router.navigate([event.detail.url]);
      }
      
    }
    else{
      console.log('Inside else');
    }
  }
}
