import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_service/user-auth.service';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  
  constructor(public userservice:UserService, private userAuthService: UserAuthService,private router:Router) { }

  ngOnInit(): void {
  }
  login(loginForm: NgForm) {
    console.log(loginForm.value);
    this.userservice.login(loginForm.value).subscribe(
      (response: any) => {
        console.log(response.user.role[0].roleName);
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  register(){
    this.router.navigate(["/register"]);
  }
}
