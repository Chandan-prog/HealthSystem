import { Component, OnInit } from '@angular/core';
import { DUMMY_DOCTORS } from '../../dummy-doctors';
import { Doctor } from './doctor.model';
import { AddDoctorFormComponent } from "./add-doctor-form/add-doctor-form.component";
import { CommonModule } from '@angular/common';
import { DoctorService } from './doctor.service';


@Component({
    selector: 'app-doctor',
    standalone: true,
    templateUrl: './doctor.component.html',
    styleUrl: './doctor.component.css',
    imports: [AddDoctorFormComponent, CommonModule]
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  showAddDoctorForm = false;
  showRemoveDoctorForm = false;
  constructor(private doctorService:DoctorService){}
  // ngOnInit(): void {
  //   const storedDoctors = localStorage.getItem('doctors');
  //   if (storedDoctors) {
  //     this.doctors = JSON.parse(storedDoctors);
  //   } else {
  //     this.doctors = DUMMY_DOCTORS;
  //   }
  // }
  ngOnInit(): void {
    this.loadDoctors();
  }
  addDoctor()
  {
    this.showAddDoctorForm = true;
  }
  removeDoctor(id: number): void {
    // this.doctors = this.doctors.filter(doctor => doctor.id !== id);
    // localStorage.setItem('doctors', JSON.stringify(this.doctors));
    if (confirm('Are you sure you want to delete this patient?')) {
    this.doctorService.removeDoctor(id);
    this.loadDoctors();}
  }
  loadDoctors(): void {
    // const storedDoctors = localStorage.getItem('doctors');
    // if (storedDoctors) {
    //   this.doctors = JSON.parse(storedDoctors);
    // } else {
    //   this.doctors = DUMMY_DOCTORS;
    //   localStorage.setItem('doctors', JSON.stringify(this.doctors));
    // }
    // this.doctors = this.doctorService.loadLocalStorage('doctors');
    this.doctors = this.doctorService.getAllDoctors();
  }
  closeModalHandler()
  {
    this.showAddDoctorForm = false;
    this.loadDoctors();
  }
}
