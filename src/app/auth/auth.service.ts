import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get isLoggedInValue(): boolean {
    return this.loggedIn.value;
  }

  checkUserExists(employeeId: string): boolean {
    return localStorage.getItem('userLoginData' + employeeId) !== null;
  }

  saveUserData(user: { name: string; employeeId: string; password: string }): void {
    localStorage.setItem(
      'userLoginData' + user.employeeId,
      JSON.stringify(user)
    );
  }

  getUserData(employeeId: string): any {
    const data = localStorage.getItem('userLoginData' + employeeId);
    return data ? JSON.parse(data) : null;
  }

  login(employeeId: string, password: string): boolean {
    const user = this.getUserData(employeeId);
    if (user && user.password === password) {
      this.loggedIn.next(true);
      return true;
    } else {
      this.loggedIn.next(false);
      return false;
    }
  }

  logout() {
    this.loggedIn.next(false);
  }

  signUp(user: { name: string; employeeId: string; password: string }): boolean {
    if (this.checkUserExists(user.employeeId)) {
      return false;
    }
    this.saveUserData(user);
    this.loggedIn.next(true);
    return true;
  }
}


