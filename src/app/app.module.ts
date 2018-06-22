// Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrerenComponent } from './registreren/registreren.component';
import { BeheerComponent } from './beheer/beheer.component';

// Overig
import { ToastrModule } from 'ngx-toastr';

import { DataService } from './services';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'registreren', component: RegistrerenComponent },
  { path: 'beheer', component: BeheerComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, RegistrerenComponent, BeheerComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
