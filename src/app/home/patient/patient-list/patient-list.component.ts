import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient.model';
import { DUMMY_PATIENTS } from '../../../dummy-patients';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DoctorService } from '../../doctor/doctor.service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css',
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private doctorService:DoctorService) {}
  ngOnInit(): void {
    const storedPatients = localStorage.getItem('patients');
    if (storedPatients) {
      this.patients = JSON.parse(storedPatients);
    } else {
      this.patients = DUMMY_PATIENTS;
    }
  }
  removePatient(id:string)
  {
    this.patients = this.patients.filter((patient) => patient.pID !== id);
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }
}
