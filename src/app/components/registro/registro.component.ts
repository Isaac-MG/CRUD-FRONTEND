import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro !: FormGroup;
  name: string = '';
  lastname: string = '';
  profiles: string []= ['root', 'admin', 'user', 'client'];
  error: boolean = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService
    ) { }

  ngOnInit(): void {
    this.formRegistro = this.formBuilder.group({
      name: ['', [Validators.email, Validators.required]],
      lastname: ['', Validators.required],
      profiles: ['']
    });
  }

  get f() { return this.formRegistro.controls; }

  registro(){
    if(this.formRegistro.invalid){
      return this.error = true;
    }
    else{
      this.error = false;
      const { name, lastname, profile } = this.formRegistro.value;
      return this.userService.registro(name, lastname, profile);
    }
  }

}
