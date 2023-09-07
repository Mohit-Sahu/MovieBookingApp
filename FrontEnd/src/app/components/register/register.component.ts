import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { Movies } from 'src/app/_model/Movie';
import { User } from 'src/app/_model/User';
import { UserService } from 'src/app/_service/user.service';


@Component({
  selector: 'app-registeruser',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public constructor(private userService:UserService){}

  ngOnInit(): void {
  }
  form:User={
    userName:'',
    email: '',
    firstName: '',
    lastName: '',
    userPassword:'',
    confirmPassword: '',
    contactNumber: ''
  }
  // form = {
  //   fullname: '',
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   acceptTerms: false,
  // };

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));

    this.userService.registerNewUser(this.form).subscribe(
       (response)=>{
         console.log(response);
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
