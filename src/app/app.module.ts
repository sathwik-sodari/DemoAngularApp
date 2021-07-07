import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SubproductComponent } from './subproduct/subproduct.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';
import { AddmobilesComponent } from './addmobiles/addmobiles.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SubproductComponent,
    MyfooterComponent,
    MynavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactusComponent,
    MobilesComponent,
    BikesComponent,
    LaptopsComponent,
    TestComponent,
    ViewmobilesComponent,
    AddmobilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
