import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {HomeComponent} from "./home/home.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component"; // Import the login component


const routes: Routes = [
  {path:'sign_up', component:SignUpPageComponent},
  {path:'', component:HomeComponent},
  { path: 'products', component: ProductPageComponent }, // add this line for the product page
  { path: 'login', component: LoginPageComponent }, // Add the route for the login page
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
