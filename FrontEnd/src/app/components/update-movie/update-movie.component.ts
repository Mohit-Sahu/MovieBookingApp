import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CompositeKey } from 'src/app/_model/CompositeKey';
import { Movies } from 'src/app/_model/Movie';
import { MoviesService } from 'src/app/_service/movie.service';
import { DialogueboxComponent } from '../dialoguebox/dialoguebox.component';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  movieName:string | undefined;
  movie:Movies={
    key: new CompositeKey,
    totalNoOfTickets:0
  }
  constructor(private route:Router, public dialog:MatDialog,private movieService:MoviesService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.movie=this.movieService.movie;
    console.log(this.movie);
  }

  form:Movies={
    key: this.movieService.movie.key,
    totalNoOfTickets: this.movie.totalNoOfTickets
  }

  openDialog(title:String,message:String): void {
    const dialogRef = this.dialog.open(DialogueboxComponent, {
      width: '450px',
      data: {
        title:title ,
        message:message ,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
  

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
    this.movieService.addUser(this.form).subscribe(
      (response: any)=>{
        console.log(response);
        this.openDialog('Update','Movie Updated Succuessfully');
        this.route.navigate(['/movielist']);
      },
      (error: any)=>{
        console.log(error);
      }
   );
  }

  onReset(form: NgForm): void {
    form.reset();
  }



}
