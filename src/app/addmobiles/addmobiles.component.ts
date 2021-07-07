import { Component, OnInit } from '@angular/core';
import { MobiledataService } from '../mobiledata.service';


@Component({
  selector: 'app-addmobiles',
  templateUrl: './addmobiles.component.html',
  styleUrls: ['./addmobiles.component.css']
})
export class AddmobilesComponent implements OnInit {

  constructor(private mObj : MobiledataService) { }

  product = {
  productHeading:"",
  productImg:"",
  productdescription:"",

  }

  onSubmit(data)
  {
    this.product.productHeading=data.productHeading;
    this.product.productImg=data.productImg;
    this.product.productdescription = data.productdescription;
    console.log(data)

    console.log(data.productHeading);
    
    console.log(this.product)

    this.mObj.createMobile(this.product).subscribe(res=>{

    },
    err=>{
      console.log("error in inserting",err)
    })
    
  }

  ngOnInit(): void {
  }

}
