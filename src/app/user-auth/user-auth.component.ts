import { Component, OnInit } from '@angular/core';
import { SignUp, login } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin: boolean = true;

  constructor(private user: UserService) { }

  ngOnInit(): void {

  }

  signUp(data: SignUp) {
    console.warn(data)
  }

  login(data: login) {
    this.user.userLogin(data)
  }

  openSignUp() {
    this.showLogin = false;
  }

  openLogin() {
    this.showLogin = true;
  }

}
