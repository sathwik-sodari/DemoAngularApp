import { Component, OnInit } from '@angular/core';
import { MobiledataService } from '../mobiledata.service';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {

  obj1;

  constructor(private mObj:MobiledataService)
  {

  }

  ngOnInit()
  {
    this.mObj.getMobiles().subscribe(data=>{
      this.obj1 = data;
      console.log(this.obj1)
    },err=>{
      console.log("err is",err)
    });
  }

}
