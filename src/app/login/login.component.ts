import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email;
  public wachtwoord;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public inloggen(email, wachtwoord) {
    const login = {
      EMAIL: email,
      PASSWORD: wachtwoord
    };
    console.log(login);
  }

}
