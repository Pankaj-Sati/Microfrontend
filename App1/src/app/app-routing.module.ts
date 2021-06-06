import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path:'app1Home',
    outlet:'app1',
    loadChildren:()=>import('./home/home.module').then(module=>module.HomeModule)
  },
  {
    path:'',
    redirectTo:'app1Home',
    pathMatch:'full'
  },
  {
    path:'**',
    outlet:'app1',
    component:Page404Component
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
