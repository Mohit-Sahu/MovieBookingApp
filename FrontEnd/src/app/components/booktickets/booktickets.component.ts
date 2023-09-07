import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/_model/Movie';
import { Tickets } from 'src/app/_model/Ticket';
import { MoviesService } from 'src/app/_service/movie.service';
import { TicketBookingService } from 'src/app/_service/ticket.service';

@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.component.html',
  styleUrls: ['./booktickets.component.css']
})
export class BookticketsComponent implements OnInit {

 
  
    status: boolean = false
    message: string = ''
    seats!: string[]
    form: any = {
      noOfTickets: '',
      seatNumber: ''
    };
    constructor(private mservice: MoviesService, private service: TicketBookingService, private route: Router) { }
    movie: Movies = this.mservice.movie
    booking() {
      if (this.form.noOfTickets != '') {
        this.seats = this.form.seatNumber.split(',')
        this.service.bookTickets(new Tickets(this.movie, this.form.noOfTickets, this.seats)).subscribe(data => {
          this.message = data
          this.status = true
          console.log(data);
          
              this.route.navigate(['/ticketlist',{tickets:this.form.noOfTickets}])
            
          
        })
      }
    }
  
    cancel() {
      this.route.navigate(['/'])
    }
    ngOnInit(): void {
    }
  
  
  

}
