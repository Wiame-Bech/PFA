import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public username : string = '';
  public password : string = '' ;

  constructor(private http: HttpClient) {}

  // login(username string , password string){
  //   return this.

  // }
}
