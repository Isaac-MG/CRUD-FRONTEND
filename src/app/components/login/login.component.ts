import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin !: FormGroup;
  email: string = '';
  password: string = '';
  error: boolean = false;

  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  get f() { return this.formLogin.controls; }

  login(){
    if(this.formLogin.invalid){
      return this.error = true;
    }
    else{
      this.error = false;
      const { email, password } = this.formLogin.value;
      return this.authService.login(email, password);
    }
  }

}
