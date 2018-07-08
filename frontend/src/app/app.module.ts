import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular-6-social-login";


import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';

// import { AuthInterceptor } from './shared/Helpers/auth.interceptor';

// import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/home/home.component';
// import { RegisterComponent } from './components/register/register.component';
// import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

// import { AuthService } from './shared/Services/auth.service'
// import { ApiService } from './shared/Services/api.service';
// import { TokenService } from './shared/Services/token.service';
// import { IsLoggedInService } from './shared/Services/is-logged-in.service';
// import { IsLoggedOutService } from './shared/Services/is-logged-out.service';
// import { UserService } from './shared/Services/user.service';

// import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
// import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

// import { ProfileComponent } from './components/profile/profile.component';
// import { OverviewComponent } from './components/dashboard/overview/overview.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // LoginComponent,
    // HomeComponent,
    // RegisterComponent,
    // VerifyEmailComponent,
    // DashboardComponent,
    // RequestResetComponent,
    // ResponseResetComponent,
    // ProfileComponent,
    // OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    HttpModule,
    PagesModule,
    SharedModule,
    DashboardModule
  ],
  providers: [
    // ApiService,
    // TokenService,
    // AuthService,
    // IsLoggedInService,
    // IsLoggedOutService,
    // UserService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
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