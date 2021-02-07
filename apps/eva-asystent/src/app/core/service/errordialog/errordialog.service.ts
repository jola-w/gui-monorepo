import { Injectable } from '@angular/core';
import { ErrordialogComponent } from '../../../shared/component/component/errordialog/errordialog.component' ;
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ErrordialogService {

  public isDialogOpen: Boolean = false;
  constructor(public dialog: MatDialog) { }
  openDialog(data): any {
      if (this.isDialogOpen) {
          return false;
      }
      this.isDialogOpen = true;
      const dialogRef = this.dialog.open(ErrordialogComponent, {
          width: '300px',
          data: data
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.isDialogOpen = false;
          let animal;
          animal = result;
      });

  }
}
