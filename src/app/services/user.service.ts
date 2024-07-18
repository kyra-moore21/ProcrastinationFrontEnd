import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: SocialUser = {} as SocialUser;
  currentUser: UserModel = {} as UserModel;
  loggedIn: boolean = false;
  users: UserModel[] = [];
  constructor(private http:HttpClient, private socialAuthServiceConfig: SocialAuthService, private router: Router) { }

  url:string = environment.url;

  GetUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${environment.url}/api/User/`);

  }

  GetById(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(`${environment.url}/api/User/${id}`);
  }

  AddUser(newUser:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${environment.url}/api/User`, newUser);
  }

  UpdateUser(targetUser:UserModel):Observable<void>{
    return this.http.put<void>(`${environment.url}/api/User/${targetUser.userId}`, targetUser);
  }

  DeleteUser(id:number):Observable<void>{
    return this.http.delete<void>(`${environment.url}/api/User/${id}`);
  }
  addUserToDB(u: SocialUser){
    let newUser: UserModel = {
      userId: 0,
    firstName: u.firstName,
    lastName:  u.lastName,
    email:     u.email,
    photoUrl:  u.photoUrl,
    display:   "weather"
    }

    this.AddUser(newUser).subscribe((response: UserModel) => {
      console.log(response);
      this.currentUser = response;

      this.router.navigate(['/homepage']);
    })
  }

 
  Login() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
      if(this.loggedIn){
        this.addUserToDB(this.user);
      }
      else{
        this.router.navigate(['/'])
      }
    });
  }

  signOut():void{
    this.socialAuthServiceConfig.signOut();
    this.currentUser = {} as UserModel;
  }

}
