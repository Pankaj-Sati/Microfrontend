import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

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
export class AppModule implements DoBootstrap
{

  constructor(public injector:Injector)
  {

  }

  /**
   * 
   * @param appRef DoBootstrap method is used for manual bootstrapping instead of using bootstap:[] in @NgModule
   */
  ngDoBootstrap(appRef: ApplicationRef): void {
    const customApp2Element=createCustomElement(AppComponent,{injector:this.injector});
    if(!customElements.get('app-app2'))
    {
      //Custom element is not added yet
      customElements.define('app-app2',customApp2Element);
    }
    this.injector.get(Router).initialNavigation();
  
  }
  
}
