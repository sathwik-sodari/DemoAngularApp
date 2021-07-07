import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmobilesComponent } from './addmobiles/addmobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},

  {path:'register',component:RegisterComponent},

  {path:'login',component:LoginComponent},

  {path:'products',component:ProductsComponent,children:[{path:"mobiles",component:MobilesComponent,children:[
    {path:'viewmobiles',component:ViewmobilesComponent},
    {path:'addmobiles',component:AddmobilesComponent},
    {path:'',redirectTo:"/products/mobiles/viewmobiles",pathMatch:"full"}]},

{path:"bikes",component:BikesComponent},
{path:"laptops",component:LaptopsComponent},
{path:'',redirectTo:"/products/mobiles/viewmobiles",pathMatch:"full"}]},

  {path:'contactus',component:ContactusComponent},
  {path:'',component:HomeComponent},
  {path:'test',component:TestComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
