import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/_model/Movie';
import { MoviesService } from 'src/app/_service/movie.service';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {



  message!:string
  name:string=''
  page: number=1;
  tableSize:number=5;
  movies:Movies[]=[];
  movieName!: any;
  constructor(private service:MoviesService, private route:Router, private aservice: UserService,private activatedRoute:ActivatedRoute) { }

  getMoviesList(){
    this.service.getAllMovies().subscribe(data=>{
      this.movies=data
    })
  }

  getMovie(){
    console.log(this.name)
    if(this.name==''){
      alert("Please Enter movie name")
    }
    else{
      this.service.movieName=this.name
      this.route.navigate(['search'])
    }

  }
  onTableDataChange(event:any){
    this.page=event;
    this.getMoviesList();
  }
  bookTicket(movie:Movies){
    this.service.movie=movie
    this.route.navigate(['bookticket'])
  }
  onAdd(){
    this.route.navigate(['/addmovie'])
  }

  deleteMovie(movieName:string, theatreName:string){
    this.service.deleteMovie(movieName,theatreName).subscribe(data=>{
      this.message=data
      alert(data);
      this.getMoviesList()
    })
  }

  updateMovie(movieName:string,movie:Movies){
    this.service.movie=movie;
    this.route.navigate(['/updatemovie',{movieName:movieName}]);
  }
 
  ngOnInit(): void {
    this.getMoviesList();
    this.movieName=this.activatedRoute.snapshot.paramMap.get('movieName');
    this.getMoviesAfterSearch(this.movieName);
  }

  getMoviesAfterSearch(movieName:any){
    console.log("inside search");
    console.log("Name:"+movieName);
    if(movieName!=''){
      this.service.getMovies(movieName).subscribe(data=>{
        console.log("inside home");
        this.movies=data;
      })
    }
    else{
      this.getMoviesList();
    }
   
  }

}
