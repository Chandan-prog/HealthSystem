import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DUMMY_DOCTORS } from '../dummy-doctors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private employeeId = new BehaviorSubject<string | null>(null);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get isLoggedInValue(): boolean {
    return this.loggedIn.value;
  }

  get currentEmployeeId(): Observable<string | null> {
    return this.employeeId.asObservable();
  }

  // get currentEmployeeIdValue(): string | null {
  //   return this.employeeId.value;
  // }

  checkUserExists(employeeId: string): boolean {
    return localStorage.getItem('userLoginData' + employeeId) !== null;
  }

  saveUserData(user: {
    name: string;
    employeeId: string;
    password: string;
  }): void {
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
      this.employeeId.next(employeeId);
      // localStorage.setItem('doctors', JSON.stringify(DUMMY_DOCTORS));
      return true;
    } else {
      this.loggedIn.next(false);
      return false;
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.employeeId.next(null);
  }

  signUp(user: {
    name: string;
    employeeId: string;
    password: string;
  }): boolean {
    if (this.checkUserExists(user.employeeId)) {
      return false;
    }
    this.saveUserData(user);
    this.loggedIn.next(true);
    this.employeeId.next(user.employeeId);
    // localStorage.setItem('doctors', JSON.stringify(DUMMY_DOCTORS));
    return true;
  }
}
