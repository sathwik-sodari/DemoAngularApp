import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(data)
  {
    if(data.username!='admin' && data.password!='admin')
    {
      alert("invalid credentials")
    }
    else{
      alert("admin login success")
      this.router.navigateByUrl("/admin")

    }
  }

}
