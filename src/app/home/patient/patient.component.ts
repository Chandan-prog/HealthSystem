import { Component, OnInit } from '@angular/core';
import { Patient } from './patient.model';
import { DUMMY_PATIENTS } from '../../dummy-patients';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
}
