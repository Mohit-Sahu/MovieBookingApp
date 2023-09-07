import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/_model/Movie';
import { MoviesService } from 'src/app/_service/movie.service';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies:Movies[]=[];
  isSearch!: false;
  movieName!: any;
  message!:string
  name:string=''
  page: number=1;
  tableSize:number=5;

  constructor(private activatedRoute:ActivatedRoute,private movieservice:MoviesService, private route:Router, private authService: UserAuthService,private userauthservice:UserAuthService) { }

  ngOnInit(): void {
   
    this.movieName=this.activatedRoute.snapshot.paramMap.get('movieName')
    console.log(this.activatedRoute.snapshot.paramMap.get('movieName'));
    this.getMoviesAfterSearch(this.movieName);
  }

  public isAdmin(){
    return this.userauthservice.isAdmin();
  }

  public isUser(){
    return this.userauthservice.isUser();
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
  getMoviesAfterSearch(movieName:any){
    console.log("inside search");
    console.log("Name:"+movieName);
    if(movieName!=''){
      this.movieservice.getMovies(movieName).subscribe(data=>{
        console.log("inside home");
        this.movies=data;
      })
    }
    else{
      this.getMoviesList();
    }
   
  }
  
  deleteMovie(movieName:string, theatreName:string){
    this.movieservice.deleteMovie(movieName,theatreName).subscribe(data=>{
      this.message=data
      alert(data);
      this.getMoviesList()
    })
  }

  updateMovie(movieName:string,movie:Movies){
    this.movieservice.movie=movie;
    this.route.navigate(['/updatemovie',{movieName:movieName}]);
  }
  onTableDataChange(event:any){
    this.page=event;
    this.getMoviesList();
  }

  

}
