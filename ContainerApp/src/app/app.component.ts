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
    this.loadScript("http://localhost:8080/main.js"); //App1
    this.loadScript("http://localhost:8081/main.js");//App2
  }

  loadScript(src:string)
  {
    const scriptTag=document.createElement("script");
    scriptTag.src=src;
    scriptTag.defer=true;
    scriptTag.onload=()=>
    {
      console.log(`${src} loaded`);
    };

    const body=document.body;
    body.appendChild(scriptTag);
  }
}

