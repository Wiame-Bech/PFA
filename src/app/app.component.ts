import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'schoolOps';

  constructor(private router:Router){}

  goToWindow1(window1:string):void{
    this.router.navigate([`${window1}`])
  }
}
