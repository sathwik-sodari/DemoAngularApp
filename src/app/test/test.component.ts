import { Component, OnInit } from '@angular/core';
// import { Console } from 'console';
import { TestdataService } from '../testdata.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myobj : any[]= [];

  constructor(private mydsobj: TestdataService ) { }

  ngOnInit(): void {
    this.mydsobj.getdata().subscribe(
      data=>{this.myobj=data;},
      error=>{
        console.log("error is ", error);
      })
      
    }
  }


