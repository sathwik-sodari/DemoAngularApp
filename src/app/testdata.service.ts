import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestdataService {

  constructor(private hc : HttpClient) {

    
   }

   getdata():Observable <any []> {
     return this.hc.get<any []>('https://jsonplaceholder.typicode.com/users');
   }
}
