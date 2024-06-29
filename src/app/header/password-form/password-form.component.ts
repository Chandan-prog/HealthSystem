import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.css',
})
export class PasswordFormComponent {
  @Input({ required: true }) employeeId?: string | null;
  @Output() close = new EventEmitter<void>();
  enteredPassword = '';
  enteredNewPassword = '';
  private authService = inject(AuthService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    const data = localStorage.getItem('userLoginData' + this.employeeId);
    if (data) {
      const fetchedData = JSON.parse(data);
      if (fetchedData.password === this.enteredPassword) {
        this.authService.saveUserData({
          name: fetchedData.name,
          employeeId: fetchedData.employeeId,
          password: this.enteredNewPassword,
        });
        this.close.emit();
      } else {
        console.log('password did not match');
      }
    }
  }
}
