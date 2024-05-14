import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFiliereComponent } from '../add-filiere/add-filiere.component';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent {
    constructor(private dialog: MatDialog) {}

    openPopup(): void {
      const dialogRef = this.dialog.open(AddFiliereComponent, {
        width: '250px', // Customize the width of the pop-up window
        // You can add more configuration options here
      });

      // Optional: Subscribe to dialog events
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
      });
    }
  }
