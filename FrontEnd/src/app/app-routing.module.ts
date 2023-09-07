import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AdminComponent } from './components/admin/admin.component';
import { BookticketsComponent } from './components/booktickets/booktickets.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { TicketlistComponent } from './components/ticketlist/ticketlist.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';
import { AuthGuard } from './_auth/auth.guard';
import { ForgotPassword } from './_model/ForgotPassword';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "search", component: SearchComponent },
  { path: "forgotpassword", component: ForgotPasswordComponent },


  { path: "bookticket", component: BookticketsComponent,canActivate:[AuthGuard] , data: { roles: ['User','Admin']}},
  { path: "updatemovie", component: UpdateMovieComponent,canActivate: [AuthGuard], data: { roles: ['Admin']}},
  { path: "addmovie", component: AddMovieComponent,canActivate: [AuthGuard], data: { roles: ['Admin']}},
  { path: "bookticket", component: BookticketsComponent},
  { path: "movielist", component: MovielistComponent},
  { path: "ticketlist", component: TicketlistComponent},
  { path: "forbidden", component: ForbiddenComponent},
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
