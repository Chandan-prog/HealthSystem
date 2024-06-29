import { Component, OnInit } from '@angular/core';
import { DUMMY_DOCTORS } from '../../dummy-doctors';
import { Doctor } from './doctor.model';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css',
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  ngOnInit(): void {
    const storedDoctors = localStorage.getItem('doctors');
    if (storedDoctors) {
      this.doctors = JSON.parse(storedDoctors);
    } else {
      this.doctors = DUMMY_DOCTORS;
    }
  }
  addDoctor()
  {

  }
  removeDoctor()
  {
    
  }
}
