import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { globalProperties } from '../../shared/globalProperties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
check: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _dialogRef : MatDialogRef<LoginComponent>,
    private _userDialog: MatDialog,
    private _userService: UserService,
    private _ngxService: NgxUiLoaderService,
    private _router: Router,
    private _snackbar: SnackbarService){}

    public loginForm:any=FormGroup;
    public responseMsg:any;

    ngOnInit():void {
      this.loginForm=this._formBuilder.group({
        email:[null,[Validators.required,Validators.pattern(globalProperties.emailRegx)]],
        password:[null,Validators.required],
      })

    }

    forgotPassword(){

    }

    changePassword(){

    }
    onLogin(){

    }
}
