import { Component, OnInit } from '@angular/core';
import { BikedataService } from '../bikedata.service';
import { productDetails } from '../models/product.models';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit{

  obj1 : productDetails[]=[];

  constructor(private bobj: BikedataService)
  {

  }
  
  ngOnInit()
  {
   this.bobj.getbikes().subscribe(data=>{
    this.obj1=data,
    err=>{
      console.log("Err is",err)
    }
   }) 
  }

  // bikes=[{
    
  //     productHeading:"Bike-1",
  //     productdescription:"Royal Enfield Classic 350",
  //     productImg:"https://imgd.aeplcdn.com/310x174/bw/models/royal-enfield-classic-350-single-channel-abs--bs-vi20200303121804.jpg?q=75"
  //     },
  //     {
  //     productHeading:"Bike-2",
  //     productdescription:"Yamaha YZF R15 V3",
  //     productImg:"https://imgd.aeplcdn.com/393x221/bw/models/yamaha-yzf-r15-v3-dual-channel-abs--bs-vi20200109152444.jpg?q=85"
  //     },
      
  //     {
  //     productHeading:"Bike-3",
  //     productdescription:"Yamaha MT 15",
  //     productImg:"https://imgd.aeplcdn.com/393x221/bw/models/yamaha-mt-15-bs-vi20200204191522.jpg?q=85"
  //     },
      
  //     {
  //     productHeading:"Bike-4",
  //     productdescription:"Bajaj Pulsar NS125",
  //     productImg:"https://imgd.aeplcdn.com/393x221/bw/models/bajaj-pulsar-ns125-standard20210420132451.jpg?q=85"
  //     },
      
  //     {
  //     productHeading:"Bike-5",
  //     productdescription:"Yamaha FZ S FI",
  //     productImg:"https://imgd.aeplcdn.com/393x221/bw/models/yamaha-fz-s-v3-single-channel-abs--bs-vi20191111114812.jpg?q=85"
  //     },
      
  //     {
  //     productHeading:"Bike-6",
  //     productdescription:"Royal Enfield Bullet 350",
  //     productImg:"https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-bullet-350-ks--x--efi-bs-vi20200401130113.jpg?q=85"
  //     }
  // ]

  

}
