import { Component, OnInit } from '@angular/core';
import { SignUp, login } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
constructor(private user: UserService) { }
  showLogin: boolean = true;
  authError: string = "";
  

  ngOnInit(): void {

  }

  signUp(data: SignUp) {
    console.warn(data)
  }

  login(data: login) {
    this.user.userLogin(data)
    this.user.invaliduserAuth.subscribe((result) => {
      console.warn("apple", result)
      if (result) {
        this.authError = "Please Enter Valid User Details"
      }
    })
  }

  openSignUp() {
    this.showLogin = false;
  }

  openLogin() {
    this.showLogin = true;
  }

}
