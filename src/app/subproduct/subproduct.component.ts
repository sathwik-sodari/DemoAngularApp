import { Component, Input, OnInit } from '@angular/core';
import {productDetails} from '../models/product.models'
@Component({
  selector: 'app-subproduct',
  templateUrl: './subproduct.component.html',
  styleUrls: ['./subproduct.component.css']
})
export class SubproductComponent {

 @Input() productObj1 : productDetails;
  
}
