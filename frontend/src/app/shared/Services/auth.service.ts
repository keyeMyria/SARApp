import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { UserService } from './user.service';
import { TimerService } from './timer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());

  authStatus = this.loggedIn.asObservable();


  private timerActive = new BehaviorSubject<boolean>(this.Token.loggedIn());
  timerStatus = this.timerActive.asObservable();

  changeAuthStatus(value : boolean){
    this.loggedIn.next(value);
    this.timerActive.next(value);
  }
  constructor(
    private Token: TokenService, 
    private Timer: TimerService
  ) { }
}