import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ContainerApp';
  readonly appNameList=["app1","app2"];

  constructor(private location:Location,
    private router:Router)
  {
    // this.loadScript("http://localhost:8080/main.js"); //App1
    this.loadScript("http://localhost:8081/main.js");//App2

    this.router.events.pipe(
      filter(event=>
        {
          return event instanceof NavigationEnd;
        })
    ).subscribe((event:NavigationEnd)=>
      {
        console.log('navigationEnd',event);
        this.emitAppNavigation(event.url);
      })
  }

  loadScript(src:string)
  {
    const scriptTag=document.createElement("script");
    scriptTag.src=src;

    scriptTag.onload=()=>
    {
      console.log(`${src} loaded`);
    };

    const body=document.body;
    body.appendChild(scriptTag);
  }

  @HostListener('window:internalAppNavigation',['$event'])
  onInternalAppNavigated(event)
  {
    console.log('internalAppNavigation Received',event);
    if(event && event.detail)
    {
      this.location.go(event.detail.app+event.detail.url); //Update the url path and also add it to browser's history without actually invoking router
    }
  }

  emitAppNavigation(url)
  {
    //Emmits custom event if it is for one of the micro apps
    let isMicroAppNavigation=false;
        let appPaths=url.split('/');
        if(appPaths.length>=2)
        {
            //Url contained /xyz
            isMicroAppNavigation=this.appNameList.indexOf(appPaths[1])!==-1; //If the first path contains the app name, then we are navigating to the microapp
        }

        console.log('isMicroAppNavigation',isMicroAppNavigation)

        if(isMicroAppNavigation)
        {
            const customEv=new CustomEvent('externalAppNavigation',
            {
                detail:
                {
                    app:appPaths[1],
                    url:appPaths.slice(2).join('/')
                }
            });
            window.dispatchEvent(customEv);
        }
  }

}

