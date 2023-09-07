import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';






import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_service/user.service';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { BookticketsComponent } from './components/booktickets/booktickets.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogueboxComponent } from './components/dialoguebox/dialoguebox.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from './components/search/search.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { TicketlistComponent } from './components/ticketlist/ticketlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HeaderComponent,
    ForbiddenComponent,
    AddMovieComponent,
    MatchPasswordDirective,
    BookticketsComponent,
    MovielistComponent,
    UpdateMovieComponent,
    AdminloginComponent,
    DialogueboxComponent,
    SearchComponent,
    ForgotPasswordComponent,
    TicketlistComponent,
  ],
  entryComponents:[DialogueboxComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule,
    NgbModalModule,
CommonModule,
MatDialogModule,
MatButtonModule





  
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
