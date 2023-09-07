import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from '../_model/ForgotPassword';
import { User } from '../_model/User';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _baseUrl="http://localhost:9090/api/v1.0/moviebooking";

  requestHeader = new HttpHeaders({
    'NoAuth': "True"
  });

  constructor(private httpClient: HttpClient,private userAuthService: UserAuthService) { }

  public login(loginData:any){
    return this.httpClient.post(this._baseUrl+"/login",loginData,{headers : this.requestHeader});
  }

  public registerNewUser(user:User){
    return this.httpClient.post(this._baseUrl+"/registerNewUser",user);

  }

  addUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this._baseUrl+'/registerNewUser',user);
  }


  public forUser() {
    return this.httpClient.get(this._baseUrl + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpClient.get(this._baseUrl + '/forAdmin', {
      responseType: 'text',
    });
  }

  changePassword(loginId:string,forgotPassword:ForgotPassword){
    return this.httpClient.put(this._baseUrl+"/"+loginId+'/forgot',forgotPassword, { responseType: 'text' });
  }

  public roleMatch(allowedRoles : any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
}
