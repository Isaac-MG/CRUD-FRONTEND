import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private router:Router
  ) { }

  registro(name: string, lastname:string, profile:string){
    this.router.navigateByUrl('home');
    return console.log(`El nombre es ${name}, el apellido es ${lastname}, el perfil es ${profile}`);
  }
}
