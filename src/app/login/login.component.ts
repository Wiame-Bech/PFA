import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username: string = ''; // Define the 'username' property
  password: string = ''; // Define the 'password' property
  invalidlogin: boolean = false; // Define the 'invalidlogin' property
  loginSucces: boolean = false; // Define the 'loginSucces' property
  successMessage: string = '';

  constructor(private LoginService: LoginServiceService) {}


  ngOnInit(): void {
    console.log(`clicked`);
  }

  // handlelogin(){
  //   this.LoginService.login().subscribe((result: any) => {
  //     this.invalidlogin = false ;
  //     this.loginSucces = true ;
  //     this.successMessage = 'login Succeful';
  //       } , () => {
  //         this.invalidlogin = true ;
  //         this.loginSucces = false ;
  //       });
  // }

}
