import { Injectable } from '@angular/core';
import { Doctor } from './doctor.model';
import { DUMMY_DOCTORS } from '../../dummy-doctors';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  doctors: Doctor[] = [];
  private localStorageKey = 'doctors';
  constructor() {
    this.initializeDoctors();
  }
  private initializeDoctors(): void {
    const storedDoctors = localStorage.getItem(this.localStorageKey);
    if (!storedDoctors) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(DUMMY_DOCTORS));
    }
  }
  private getDoctorsFromLocalStorage(): Doctor[] {
    const storedDoctors = localStorage.getItem(this.localStorageKey);
    return storedDoctors ? JSON.parse(storedDoctors) : DUMMY_DOCTORS;
  }

  private saveDoctorsToLocalStorage(doctors: Doctor[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(doctors));
  }

  getAllDoctors(): Doctor[] {
    return this.getDoctorsFromLocalStorage();
  }
  addDoctor(info: Doctor): void {
    const doctors = this.getDoctorsFromLocalStorage();
    doctors.push(info);
    this.saveDoctorsToLocalStorage(doctors);
  }
  removeDoctor(id: number): void {
    let doctors = this.getDoctorsFromLocalStorage();
    doctors = doctors.filter(doctor => doctor.id !== id);
    this.saveDoctorsToLocalStorage(doctors);
  }
  // addDoctor(info: Doctor) {
  //   const storedDoctors = localStorage.getItem('doctors');
  //   if (storedDoctors) {
  //     this.doctors = JSON.parse(storedDoctors);
  //     this.doctors.push(info);
  //     localStorage.setItem('doctors', JSON.stringify(this.doctors));
  //   } else {
  //     this.doctors = DUMMY_DOCTORS;
  //     this.doctors.push(info);
  //     localStorage.setItem('doctors', JSON.stringify(this.doctors));
  //   }
  // }
  // loadLocalStorage(key: string) {
  //   const storedItems = localStorage.getItem(key);
  //   if (storedItems) {
  //     return JSON.parse(storedItems);
  //   } else if (key === 'doctors') {
  //     this.doctors = DUMMY_DOCTORS;
  //     localStorage.setItem('doctors', JSON.stringify(this.doctors));
  //   }
  // }
}
