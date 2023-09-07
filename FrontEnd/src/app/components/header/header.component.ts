import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/_model/Movie';
import { MoviesService } from 'src/app/_service/movie.service';
import { UserAuthService } from 'src/app/_service/user-auth.service';
import { UserService } from 'src/app/_service/user.service';

import { ModalConfig } from '../../modal.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private userauthservice: UserAuthService,private router:Router, public userService:UserService,private movieservice:MoviesService) { }

  ngOnInit(): void {
  }
  public isLoggedIn(){
    return this.userauthservice.isLoggedIn();
  }
  public logout(){
    this.userauthservice.clear();
    this.router.navigate(['/']);
  }

  public isAdmin(){
    return this.userauthservice.isAdmin();
  }

  public isUser(){
    return this.userauthservice.isUser();
  }

  
  message!:string
  name:string=''
  searchKeyword:string=''
  page: number=1;
  tableSize:number=5;
  movies:Movies[]=[];

  getMovies(searchKey:any){
   // console.log(event.target.value);
    this.movieservice.getMovies(searchKey).subscribe(data=>{
      this.movies=data;
      this.router.navigate(['/search',{movieName:searchKey}])
    },(error)=>{
     console.log(error);
    })

  }
  public search(searchKey : any){
    console.log(searchKey.value);
    this.getMovies(searchKey.value);  
  
  }


}
