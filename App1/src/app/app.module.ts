import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(public injector:Injector)
  {

  }
  ngDoBootstrap(appRef: ApplicationRef): void 
  {
    const customAppElement=createCustomElement(AppComponent,{injector:this.injector});
    customElements.define('app-app1',customAppElement); //Defines the name and element constructor
  }



 }
