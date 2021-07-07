import { Component, Input, OnInit } from '@angular/core';
import { MobiledataService } from '../mobiledata.service';
import { productDetails } from '../models/product.models'

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

// obj1:productDetails[]=[];

//   constructor(private mObj:MobiledataService)
//   {

//   }

  ngOnInit()
  {
//     this.mObj.getMobiles().subscribe(data=>{
//       this.obj1 = data
//     },err=>{
//       console.log("err is",err)
//     });
  }


  // mobiles=[
  //   {
  //   productHeading:"Technology-1",
  //   productdescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImg:"https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
  //   },
  //   {
  //   productHeading:"Technology-2",
  //   productdescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImg:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
  //   },
    
  //   {
  //   productHeading:"Technology-3",
  //   productdescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImg:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },
    
  //   {
  //   productHeading:"Technology-4",
  //   productdescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImg:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },
    
  //   {
  //   productHeading:"Technology-5",
  //   productdescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImg:"https://wallpaperaccess.com/full/4755970.jpg"
  //   },
    
  //   {
  //   productHeading:"Technology-6",
  //   productdescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImg:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5577975.jpg"
  //   }
  //   ];

 
}
