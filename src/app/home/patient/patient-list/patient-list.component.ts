import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient.model';
import { DUMMY_PATIENTS } from '../../../dummy-patients';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css',
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService,)
  {

  }

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
    if (confirm('Are you sure you want to delete this patient?')) {
      this.patientService.removePatient(id);
      this.patients = this.patientService.getAllPatients();
    }
  }
}
