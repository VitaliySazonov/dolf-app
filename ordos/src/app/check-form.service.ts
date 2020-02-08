import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }

  checkName(name)           { return !name ? false : true }
  checkLogin(login)         { return !login ? false : true }
  checkEmail(email)         { return !email ? false : true }
  checkPassword(password)   { return !password ? false : true }
}
