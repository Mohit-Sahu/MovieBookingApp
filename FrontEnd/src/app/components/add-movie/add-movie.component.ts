import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompositeKey } from 'src/app/_model/CompositeKey';
import { Movies } from 'src/app/_model/Movie';
import { MoviesService } from 'src/app/_service/movie.service';
import { UserService } from 'src/app/_service/user.service';
import { DialogueboxComponent } from '../dialoguebox/dialoguebox.component';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor( public dialog:MatDialog,private movieService:MoviesService,private route:Router) { }

  ngOnInit(): void {
  }

  form:Movies={
    key: new CompositeKey,
    totalNoOfTickets: 0
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogueboxComponent, {
      width: '450px',
      data: {
        title: 'Alert',
        message: 'Movie added Successfully',
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
        this.openDialog();
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

  addUser(){
  
    
    }

}
