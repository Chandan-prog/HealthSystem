import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-edit-patient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
})
export class EditPatientComponent implements OnInit {
  patient!: Patient;
  id!: string;

  entered_patient_id = '';
  entered_patient_name = '';
  entered_reason_for_visit = '';
  entered_assigned_doc = '';
  entered_appointment_details = '';
  entered_status = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      const patientData = localStorage.getItem('patients');
      const patients = JSON.parse(patientData || '[]');
      this.patient = patients.find((p: Patient) => p.pID === this.id);
      if (this.patient) {
        this.entered_patient_id = this.patient.pID;
        this.entered_patient_name = this.patient.name;
        this.entered_reason_for_visit = this.patient.reasonForVisit;
        this.entered_assigned_doc = this.patient.assignedDoctor;
        this.entered_appointment_details = this.patient.scheduleDetails;
        this.entered_status = this.patient.status;
      }
    });
  }

  onCancel() {
    this.router.navigate(['/patient']);
  }

  onUpdate() {
    const updatedPatient = {
      pID: this.entered_patient_id,
      name: this.entered_patient_name,
      reasonForVisit: this.entered_reason_for_visit,
      assignedDoctor: this.entered_assigned_doc,
      scheduleDetails: this.entered_appointment_details,
      status: this.entered_status,
    };

    let storedPatients = localStorage.getItem('patients');
    let patients = storedPatients ? JSON.parse(storedPatients) : [];

    const index = patients.findIndex((p: Patient) => p.pID === this.id);
    if (index !== -1) {
      patients[index] = updatedPatient;
      localStorage.setItem('patients', JSON.stringify(patients));
    }

    console.log(updatedPatient);
    this.router.navigate(['/patient']);
  }
}
