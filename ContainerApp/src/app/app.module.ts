import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1WrapperComponent } from './app1-wrapper/app1-wrapper.component';
import { App2WrapperComponent } from './app2-wrapper/app2-wrapper.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    App1WrapperComponent,
    App2WrapperComponent,
    Page404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
