import { Component, OnInit } from '@angular/core';
import { MobiledataService } from 'src/app/mobiledata.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

mobiles;

  constructor(private mObj: MobiledataService ) { }

  ngOnInit(): void {
    this.mObj.getMobiles().subscribe(data=>{
      this.mobiles = data ;
      console.log(this.mobiles)
    },err=>{
      console.log("error in admin module viewproducts",err)
    })

  }



}
