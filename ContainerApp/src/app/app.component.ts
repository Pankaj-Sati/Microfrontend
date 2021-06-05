import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ContainerApp';

  constructor()
  {
    this.loadScript();
  }

  loadScript()
  {
    const scriptTag=document.createElement("script");
    scriptTag.src="http://localhost:8080/app1-main.js";
    scriptTag.defer=true;
    scriptTag.onload=()=>
    {
      console.log('App1 script loaded')
    };

    const body=document.body;
    body.appendChild(scriptTag);
  }
}

