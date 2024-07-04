import { Component } from '@angular/core';
import { SignUpComponent } from './signup/signup.component';
import { LogInComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [SignUpComponent, LogInComponent],
  standalone: true
})
export class AuthComponent {
  userAvailable = true;

  showLogInForm() {
    this.userAvailable = true;
  }

  showSignUpForm() {
    this.userAvailable = false;
  }
}
