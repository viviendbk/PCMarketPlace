import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'sign_up', component:SignUpPageComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
