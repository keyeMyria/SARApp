import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IsLoggedOutService } from './Services/is-logged-out.service';
import { IsLoggedInService } from './Services/is-logged-in.service';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [IsLoggedOutService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedOutService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsLoggedOutService]
  },
  {
    path: 'user/verify',
    component: VerifyEmailComponent,
    canActivate: [IsLoggedOutService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsLoggedInService]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
