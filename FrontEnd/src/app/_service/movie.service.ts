import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../_model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  movie!:Movies
  movieName:string=''
  movies!: Movies[];
  private url='http://localhost:9090/api/v1.0/moviebooking';
  constructor(private httpClient:HttpClient) { }

  getAllMovies():Observable<Movies[]>{
    return this.httpClient.get<Movies[]>(this.url+'/all')
    

  }

  addUser(movie:Movies):Observable<Movies>{
    return this.httpClient.post<Movies>(this.url+'/add',movie);
  }


  getMovies(movieName:string):Observable<Movies[]>{
    return this.httpClient.get<Movies[]>(this.url+'/movies/search/'+movieName)
  }

  deleteMovie(movieName:string, theatreName:string){
    return this.httpClient.delete(this.url+'/'+movieName+'/'+theatreName+'/delete',{ responseType: 'text' })
  }

  updateMovie(movieName:string){
    return this.httpClient.put(this.url+'/'+movieName+'/update',{ responseType: 'text' })
  }

  movieDetails(movieName:string, theatreName:string):Observable<number>{
    return this.httpClient.get<number>(this.url+'/bookedmovies/'+movieName+'/'+theatreName)
  }
}
