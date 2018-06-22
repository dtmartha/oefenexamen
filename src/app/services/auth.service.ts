import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  constructor(
    private _router: Router,
    private _user: UserService,
  ) {}

  logout() {
    if (this._router.url !== 'login') {
      this._user.setUserLoggedOut();
      this._router.navigate(['login']);
    }
  }
}
