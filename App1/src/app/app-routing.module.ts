import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path:'app1Home',
    loadChildren:()=>import('./home/home.module').then(module=>module.HomeModule)
  },
  {
    path:'',
    redirectTo:'app1Home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:Page404Component
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
