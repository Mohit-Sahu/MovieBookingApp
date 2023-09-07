import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPassword } from 'src/app/_model/ForgotPassword';
import { User } from 'src/app/_model/User';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public constructor(private route:Router,private userService:UserService,private activatedRoute:ActivatedRoute){}
 
  userName:any;
  ngOnInit(): void {
    this.userName=this.activatedRoute.snapshot.paramMap.get('userName');
  }
  form:ForgotPassword={
    userPassword:'',
    confirmPassword: '',
  }
 

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));

    this.userService.changePassword(this.userName,this.form).subscribe(
       (response)=>{
         console.log(response);
         alert(response);
         this.route.navigate(['/login']);
       },
       (error)=>{
         console.log(error);
       }
    );
  }

  onReset(form: NgForm): void {
    form.reset();
  }

}
