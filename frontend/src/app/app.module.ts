import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule } from '@angular/forms';
import { PagesModule } from './modules/pages.module';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular-6-social-login";
import { HttpClientModule } from '@angular/common/http';


import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthService } from './Services/auth.service'
import { ApiService } from './Services/api.service';
import { TokenService } from './Services/token.service';
import { IsLoggedInService } from './Services/is-logged-in.service';
import { IsLoggedOutService } from './Services/is-logged-out.service';
import { UserService } from './Services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    VerifyEmailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    TokenService,
    AuthService,
    IsLoggedInService,
    IsLoggedOutService,
    UserService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1725955257483070")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("812292671015-549c1s642qrta5ni6ng3mlie5g0c8m2e.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}