import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productDetails } from './models/product.models';

@Injectable({
  providedIn: 'root'
})
export class LaptopdataService {

  constructor(private hc : HttpClient) { }

  // laptops=[
  //   {
  //   productHeading:"Laptop-1",
  //   productdescription:"HP 15 (2021) Thin & Light 11th Gen Core i3 Laptop, 8 GB RAM, 1TB HDD, 15.6-inch (39.62 cms) FHD Screen, Windows 10, MS Office",
  //   productImg:"https://m.media-amazon.com/images/I/81Ne5qKmE8L._AC_UL480_FMwebp_QL65_.jpg"
  //   },
  //   {
  //   productHeading:"Laptop-2",
  //   productdescription:"Lenovo Ideapad S145 Intel Core i5 10th Gen 15.6 inch (39.62 cms) FHD Thin and Light Laptop (8GB/1TB/Windows",
  //   productImg:"https://m.media-amazon.com/images/I/81EoCoV-8tL._AC_UL480_FMwebp_QL65_.jpg"
  //   },
    
  //   {
  //   productHeading:"Laptop-3",
  //   productdescription:"Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch (39.62 cms) Display T&L Gaming Laptop (8GB Ram/1TB HDD + 256GB SSD/Win10/GTX 1650Ti",
  //   productImg:"https://m.media-amazon.com/images/I/81mxlt2J81L._AC_UL480_FMwebp_QL65_.jpg"
  //   },
    
  //   {
  //   productHeading:"Laptop-4",
  //   productdescription:"Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen 14-inch (35.56 cms) Thin and Light Laptop(8GB/512GB SSD/Windows",
  //   productImg:"https://m.media-amazon.com/images/I/712rw0zcH8L._AC_UL480_FMwebp_QL65_.jpg"
  //   },
    
  //   {
  //   productHeading:"Laptop-5",
  //   productdescription:"New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)",
  //   productImg:"https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UL480_FMwebp_QL65_.jpg"
  //   },
    
  //   {
  //   productHeading:"Laptop-6",
  //   productdescription:"Lenovo Legion 5 AMD Ryzen 5 4600H 15.6 inch (39.62 cms) Full HD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/120 Hz/NVIDIA",
  //   productImg:"https://m.media-amazon.com/images/I/61ItfhQmaFL._AC_UL480_FMwebp_QL65_.jpg"
  //   }
  //   ];

    getlaptops():Observable<any>
    {
      return this.hc.get("http://localhost:3000/laptops");
    }
}
