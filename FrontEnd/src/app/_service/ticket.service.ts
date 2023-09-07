import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tickets } from '../_model/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  private url='http://localhost:9090/api/v1.0/moviebooking';
  constructor(private httpClient:HttpClient) { }
  bookTickets(ticket:Tickets){
    return this.httpClient.post(this.url+'/book',ticket,{ responseType: 'text' })
  }

  viewTickets(movieName:string, theatreName:string):Observable<number>{
    return this.httpClient.get<number>(this.url+'/bookedtickets/'+movieName+'/'+theatreName);
  }
}
