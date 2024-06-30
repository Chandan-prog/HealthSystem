import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// import { PatientService } from '../patient.service';
import { DoctorService } from '../../doctor/doctor.service';

@Component({
  selector: 'app-add-patient-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-patient-form.component.html',
  styleUrl: './add-patient-form.component.css',
})
export class AddPatientFormComponent {
  entered_patient_id = '';
  entered_patient_name = '';
  entered_reason_for_visit = '';
  entered_assigned_doc = '';
  entered_appointment_details = '';
  entered_status = '';

  constructor(
    // private patientService: PatientService,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  onCancel() {
    this.router.navigate(['/patient'])

  }
  onSubmit() {
    const patient = {
      pID: this.entered_patient_id,
      name: this.entered_patient_name,
      reasonForVisit: this.entered_reason_for_visit,
      assignedDoctor: this.entered_assigned_doc,
      scheduleDetails: this.entered_appointment_details,
      status: this.entered_status,
    };
    // this.patientService.addPatient(patient);
    // this.doctorService.loadLocalStorage('patients');
    this.router.navigate(['patient','payment',this.entered_patient_id,{ patient: JSON.stringify(patient) }]);
  }
}
