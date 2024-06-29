import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { PasswordFormComponent } from './password-form/password-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterLink, PasswordFormComponent],
})
export class HeaderComponent {
  isLoggedIn = false;

  employeeId: string | null = null;

  isChangingPassword = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });
    this.authService.currentEmployeeId.subscribe((id) => {
      this.employeeId = id;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onPasswordChange() {
    this.isChangingPassword = true;
  }

  onClosePasswordChange() {
    this.isChangingPassword = false;
  }
}
