import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  private dataSource = new BehaviorSubject<object>(JSON.parse(this.User.get()));
  authStatus = this.loggedIn.asObservable();
  currentData = this.dataSource.asObservable();

  changeDataSource(data : object) {
    this.dataSource.next(data);
  }
  changeAuthStatus(value : boolean){
    this.loggedIn.next(value);

  }
  constructor(
    private Token: TokenService, 
    private User: UserService
  ) { }
}