// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LogInComponent {
  enteredEmployeeId = '';
  enteredPassword = '';

  errorObject = {
    loginError: '',
    passwordError: ''
  };

  constructor(private authService: AuthService, private router:Router) {}

  onLogIn() {
    const success = this.authService.login(this.enteredEmployeeId, this.enteredPassword);
    if (success) {
      this.errorObject.loginError = '';
      this.errorObject.passwordError = '';
      this.router.navigate(['/home']);
      // console.log(this.enteredEmployeeId, this.enteredPassword)
      
    } else {
      const data = this.authService.getUserData(this.enteredEmployeeId);
      if (data) {
        this.errorObject.loginError = '';
        this.errorObject.passwordError = 'Kindly check the password!';
      } else {
        this.errorObject.loginError = 'Kindly check the employee Id or else sign up!';
      }
    }
  }
}

