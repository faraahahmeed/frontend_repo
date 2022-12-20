import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})


export class AdminSignupComponent implements OnInit {

  admin: Admin = new Admin();
  constructor(private adminservice: AdminService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveAdmin()
  {
    this.adminservice.adminsignup(this.admin).subscribe(data => {
      console.log(data);
      
    },
    );
  }

  gotologin()
  {
    this.router.navigate(['signin']);
  }
  

  onSubmit(){
    console.log(this.admin);
    this.saveAdmin();
    this.gotologin();
  }
}
