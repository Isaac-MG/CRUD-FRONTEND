import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  login(email:string, password:string){
    this.router.navigateByUrl('home');
    return console.log(`El correo es ${email}, la contraseña es ${password}`);
  }
}
