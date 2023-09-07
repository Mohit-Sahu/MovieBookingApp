import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/_model/Movie';
import { Tickets } from 'src/app/_model/Ticket';
import { MoviesService } from 'src/app/_service/movie.service';
import { TicketBookingService } from 'src/app/_service/ticket.service';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {
  tickets!:any;

  constructor(private activatedRoute:ActivatedRoute ,private mservice: MoviesService, private service: TicketBookingService, private route: Router) { }
   
  movies: Movies = this.mservice.movie;

  ngOnInit(): void {
    this.tickets=this.activatedRoute.snapshot.paramMap.get('tickets')
  }

}
