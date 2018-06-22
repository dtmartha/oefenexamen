import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { promise } from 'protractor';

@Injectable()
export class DataService {
  private apiUrl = '/api/';

  constructor(private http: Http) {}

  // Inloggen
  public async checkLogin(email, wachtwoord) {
    const user = await this.http.post(this.apiUrl + 'Beheer?email=' + email + '&wachtwoord=' + wachtwoord, '').toPromise();
    return user.json();
  }

  // Organisaties (OWNERS) //
  // Alle organisaties
  public async getIngelogdeOrganisatie(ownersId) {
    const ingelogdeOrganisaties = await this.http.get(this.apiUrl + 'Owners/' + ownersId).toPromise();
    return ingelogdeOrganisaties.json();
  }

  public async getOrganisaties(status) {
    const organisatie = await this.http.get(this.apiUrl + 'Owners?status=' + status).toPromise();
    return organisatie.json();
  }

  public async getAllesVoorBeheer(status, ownersId) {
    const organisatie = await this.http.get(this.apiUrl + 'Owners?status=' + status + '&ownersId=' + ownersId).toPromise();
    return organisatie.json();
  }

  public async postOrganisatiesDB(organisaties) {
    const nieuweOrganisatie = await this.http.post(this.apiUrl + 'Owners', organisaties).toPromise();
    return nieuweOrganisatie.json();
  }

  public async putOrganisatieArchiveren(organisaties) {
    const gearchiveerdeOrganisatie = await this.http.put(this.apiUrl + 'Owners', organisaties).toPromise();
    return gearchiveerdeOrganisatie.json();
  }
}
