import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.css']
})
export class RegistrerenComponent implements OnInit {
  public naam;
  public email;
  public wachtwoord;

  constructor() {}

  ngOnInit() {}

  public registreren(naam, email, wachtwoord) {
    const registreren = {
      NAME: naam,
      EMAIL: email,
      PASSWORD: wachtwoord
    };

    console.log(registreren);
  }
}
