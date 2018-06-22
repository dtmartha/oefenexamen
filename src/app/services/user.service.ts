import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class UserService {
  private isIngelogd;
  private superBeheer = false;
  private deGebruiker;
  private deRol;

  constructor(private _dataService: DataService) {}

  public async setUserLoggedIn(user, rol) {
    if (user !== null && rol !== null) {
      this.isIngelogd = true;
      this.deGebruiker = user;
      // this.deRol = await this._dataService.getRol(rol.ID);
    }
  }

  public setSuperBool(bool: boolean) {
    this.superBeheer = bool;
  }

  public getIngelogdBool() {
    return this.isIngelogd;
  }

  public getSuperBool() {
    return this.superBeheer;
    // return true;
  }

  public getIngelogdeGebruiker() {
    return this.deGebruiker;
  }

  public async getIngelogdBedrijf(ownersId) {
    const bedrijf = await this._dataService.getIngelogdeOrganisatie(ownersId);
    return bedrijf.NAME;
  }

  public getIngelogdeRol() {
    return this.deRol;
  }

  public setUserLoggedOut() {
    this.isIngelogd = false;
    this.deGebruiker = undefined;
    this.deRol = undefined;
    this.superBeheer = false;
  }
}
