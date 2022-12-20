import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.css']
})
export class AdminsigninComponent implements OnInit {


  admin: Admin= new Admin();
  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  gotosignup()
  {
    this.router.navigate(['trips']);
  }
  

  onSubmit(){
    console.log(this.admin);
    this.gotosignup();
  }

}
