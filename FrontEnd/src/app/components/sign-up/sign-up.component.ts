import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { globalProperties } from '../../shared/globalProperties';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from '../../services/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  public responseMsg:any;
  constructor(
    private _formBuilder:FormBuilder,
    private _ngxservice: NgxUiLoaderService,
    private _userservice:UserService,
    private _dialogRef:MatDialogRef<SignUpComponent>,
    private _snackbarService: SnackbarService,
    private _router: Router
 
  ){}

  public registerForm: any =FormGroup;
  ngOnInit(): void {
    this.registerForm= this._formBuilder.group({
      username:[null,[Validators.required,Validators.pattern(globalProperties.nameRegx)]],
      password:[null,Validators.required],
      email:[null,[Validators.required,Validators.pattern(globalProperties.emailRegx)]],
      contact:[null,[Validators.required,Validators.pattern(globalProperties.ContactNumberREgex)]]

    })
}
onRegister(){
this._ngxservice.start();
var formData=this.registerForm.value;
const data={
  username:formData.username,
  cnumber:formData.contact,
  email:formData.email,
  password:formData.password
}
this._userservice.signUp(data).subscribe((res:any)=>{
  this._ngxservice.stop();
  this._dialogRef.close();
  this.responseMsg=res?.message;
  console.log(this.responseMsg);
  this._snackbarService.openSnackbar(this.responseMsg,'')
  this._router.navigate(['/'])
  
},(err: any) => {
  console.log(err)
  this._ngxservice.stop()
  if(err.error?.message){
    this.responseMsg = err.error?.message;
  }
  else{
    this.responseMsg = globalProperties.genericError
  }
  this._snackbarService.openSnackbar(this.responseMsg, globalProperties.error)
})
}

}
