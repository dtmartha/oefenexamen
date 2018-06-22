import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.scss']
})
export class RegistrerenComponent implements OnInit {
  public naam;
  public email;
  public wachtwoord;

  constructor(private toastr: ToastrService) {}

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
