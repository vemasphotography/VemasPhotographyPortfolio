import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _userDialog: MatDialog){

  };
  userSignUp(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width= '60rem'
    dialogConfig.position={ right:'15rem', top:'10rem'}
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    this._userDialog.open(SignUpComponent,dialogConfig)
  }
  userLogIn(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width= '40rem'
    dialogConfig.position={ right:'20rem', top:'10rem'}
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    this._userDialog.open(LoginComponent,dialogConfig)
  

  }
}
