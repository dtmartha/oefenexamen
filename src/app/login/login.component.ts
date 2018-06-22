import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email;
  public wachtwoord;

  constructor(private _router: Router, private _dataservice: DataService, private toastr: ToastrService) {}

  ngOnInit() {}

  public async inloggen(email, wachtwoord) {
    const user = await this._dataservice.checkLogin(email, wachtwoord);
    console.log(user);
    if (user !== null) {
      this._router.navigate(['/beheer']);
    } else {
      this.toastr.warning('Inlog gegevens zijn incorrect', 'SC Buitenboys');
    }
  }
}
