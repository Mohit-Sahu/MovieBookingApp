import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/_model/Movie';
import { MoviesService } from 'src/app/_service/movie.service';
import { UserAuthService } from 'src/app/_service/user-auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:Movies[]=[];
  isSearch!: false;
  movieName:any;

  constructor(private movieservice:MoviesService, private route:Router, private authService: UserAuthService) { }

  ngOnInit(): void {
    this.getMoviesList();
    this.myFun();
  }

  myFun(){
    console.log("insideMyfun");
  }

  bookTicket(movie:Movies){
    console.log(movie);
    this.movieservice.movie=movie;
    this.route.navigate(['/bookticket']);

  }

  getMoviesList(){
    this.movieservice.getAllMovies().subscribe(data=>{
      console.log(data);
      this.movies=data;
    })
  }
 
  

}
