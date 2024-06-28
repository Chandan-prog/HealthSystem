import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class SignUpComponent {
  enteredUserName = '';
  enteredEmployeeId = '';
  enteredPassword = '';

  errorObject = {
    singUpError: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp() {
    const success = this.authService.signUp({
      name: this.enteredUserName,
      employeeId: this.enteredEmployeeId,
      password: this.enteredPassword,
    });

    if (success) {
      this.errorObject.singUpError = '';
      // this.router.navigate(['/restaurants'])
    } else {
      this.errorObject.singUpError =
        'You already have an account, kindly log in!';
    }
  }
}
