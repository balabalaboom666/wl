import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, AbstractControl, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  myForm: FormGroup; //对应登录的表单
  userName: AbstractControl; //输入用户名的输控件
  password: AbstractControl; //输入密码控件
  

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      'userName': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });

    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    this.userName.valueChanges.subscribe(val => {
      console.log(val);
    });
    
  }

  ngOnInit(): void {
  }
   
  login(){
    this.authService.login();
  }

  onSubmit(value: any) {
    console.log(value);
  }
}


