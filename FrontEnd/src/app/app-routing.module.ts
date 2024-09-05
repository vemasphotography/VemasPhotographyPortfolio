import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [{
  path:'',
  redirectTo:'/home', //localost:4200/home
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent,
},
{
  path:'signup',
  component:SignUpComponent,
},
{
  path:'**',
  component:PageNotFoundComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
