import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1WrapperComponent } from './app1-wrapper/app1-wrapper.component';
import { App2WrapperComponent } from './app2-wrapper/app2-wrapper.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'app1',
    component:App1WrapperComponent
  },
  {
    path:'app2',
    component:App2WrapperComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
