// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { Patient } from '../patient.model';
// import { Doctor } from '../../doctor/doctor.model';
// import { DUMMY_DOCTORS } from '../../../dummy-doctors';
// import { DatePipe } from '@angular/common';

// @Component({
//   selector: 'app-edit-patient',
//   standalone: true,
//   imports: [FormsModule],
//   providers: [DatePipe],
//   templateUrl: './edit-patient.component.html',
//   styleUrls: ['./edit-patient.component.css'],
// })
// export class EditPatientComponent implements OnInit {
//   patient!: Patient;
//   id!: string;

//   entered_patient_id = '';
//   entered_patient_name = '';
//   entered_reason_for_visit = '';
//   entered_assigned_doc = '';
//   entered_appointment_details = '';
//   entered_status = '';
//   entered_specialization = ''; 
//     entered_appointment_date = '';
//     entered_appointment_time = '';
//     availableDoctors: string[] = [];
//     doctors: Doctor[] = [];

//   constructor(private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params) => {
//       this.id = params.get('id') || '';
//       const patientData = localStorage.getItem('patients');
//       const patients = JSON.parse(patientData || '[]');
//       this.patient = patients.find((p: Patient) => p.pID === this.id);
//       if (this.patient) {
//         this.entered_patient_id = this.patient.pID;
//         this.entered_patient_name = this.patient.name;
//         this.entered_reason_for_visit = this.patient.reasonForVisit;
//         this.entered_assigned_doc = this.patient.assignedDoctor;
//         this.entered_appointment_details = this.patient.scheduleDetails;
//         this.entered_status = this.patient.status;
//         this.entered_appointment_date = this.patient.date;
//         this.entered_appointment_time = this.patient.time;
//       }
//     });
//   }

//   onCancel() {
//     this.router.navigate(['/patient']);
//   }

//   onUpdate() {
//     const formattedDateTime = this.formatDateTime(this.entered_appointment_date, this.entered_appointment_time);
//     const updatedPatient = {
//       pID: this.entered_patient_id,
//       name: this.entered_patient_name,
//       reasonForVisit: this.entered_reason_for_visit,
//       assignedDoctor: this.entered_assigned_doc,
//       scheduleDetails: formattedDateTime,
//       status: this.entered_status,
//       date: this.entered_appointment_date,
//       time: this.entered_appointment_time,
//     };

//     let storedPatients = localStorage.getItem('patients');
//     let patients = storedPatients ? JSON.parse(storedPatients) : [];

//     const index = patients.findIndex((p: Patient) => p.pID === this.id);
//     if (index !== -1) {
//       patients[index] = updatedPatient;
//       localStorage.setItem('patients', JSON.stringify(patients));
//     }

//     console.log(updatedPatient);
//     this.router.navigate(['/patient']);
//   }
//   updateDoctorsDropdown() {
//     const storedDoctors = localStorage.getItem('doctors');
//     if (storedDoctors) {
//       this.doctors = JSON.parse(storedDoctors);
//     } else {
//       this.doctors = DUMMY_DOCTORS;
//     }
//     const filteredDoctors = this.doctors.filter(doc => doc.specialization === this.entered_specialization);
//     this.availableDoctors = filteredDoctors.map(doc => doc.name);
//   }

//   private formatDateTime(date: string, time: string): string {
//     const fullDate = new Date(date + 'T' + time);
//     return this.datePipe.transform(fullDate, 'yyyy-MM-dd, h:mm a') || '';
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Patient } from '../patient.model';
import { Doctor } from '../../doctor/doctor.model';
import { DUMMY_DOCTORS } from '../../../dummy-doctors';
import { DatePipe } from '@angular/common';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-edit-patient',
  standalone: true,
  imports: [FormsModule],
  providers: [DatePipe],
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
  entered_specialization = ''; 
  entered_appointment_date = '';
  entered_appointment_time = '';
  availableDoctors: string[] = [];
  doctors: Doctor[] = [];

  constructor(private patientService:PatientService ,private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      const patientData = localStorage.getItem('patients');
      const patients = JSON.parse(patientData || '[]');
      this.patient = patients.find((p: Patient) => p.pID === this.id);
      // this.patient = this.patientService.getPatientById(this.id) || this.getEmptyPatient();;
      if (this.patient) {
        this.entered_patient_id = this.patient.pID;
        this.entered_patient_name = this.patient.name;
        this.entered_reason_for_visit = this.patient.reasonForVisit;
        this.entered_assigned_doc = this.patient.assignedDoctor;
        this.entered_specialization = this.patient.specialization;
        this.entered_appointment_details = this.patient.scheduleDetails;
        this.entered_status = this.patient.status;
        // const [date, time] = this.patient.scheduleDetails.split(', ');
        const date= this.patient.date;
        const time = this.patient.time;
        this.entered_appointment_date = this.datePipe.transform(new Date(date), 'yyyy-MM-dd') || '';
        this.entered_appointment_time = this.datePipe.transform(new Date('1970-01-01T' + time), 'HH:mm') || '';

        this.updateDoctorsDropdown();
      }
    });
  }

  onCancel() {
    this.router.navigate(['/patient']);
  }

  onUpdate() {
    
      if (
        !this.entered_patient_id || 
        !this.entered_patient_name || 
        !this.entered_reason_for_visit || 
        !this.entered_assigned_doc || 
        !this.entered_specialization || 
        !this.entered_appointment_date || 
        !this.entered_appointment_time || 
        !this.entered_status
      ) {
        alert('All fields are important');
        return;
      }
    const formattedDateTime = this.formatDateTime(this.entered_appointment_date, this.entered_appointment_time);
    const updatedPatient = {
      pID: this.entered_patient_id,
      name: this.entered_patient_name,
      reasonForVisit: this.entered_reason_for_visit,
      assignedDoctor: this.entered_assigned_doc,
      specialization: this.entered_specialization,
      scheduleDetails: formattedDateTime,
      status: this.entered_status,
      date: this.entered_appointment_date,
      time: this.entered_appointment_time,
    };

    // let storedPatients = localStorage.getItem('patients');
    // let patients = storedPatients ? JSON.parse(storedPatients) : [];

    // const index = patients.findIndex((p: Patient) => p.pID === this.id);
    // if (index !== -1) {
    //   patients[index] = updatedPatient;
    //   localStorage.setItem('patients', JSON.stringify(patients));
    // }

    // console.log(updatedPatient);
    this.patientService.updatePatient(updatedPatient);
    this.router.navigate(['/patient']);
  }

  updateDoctorsDropdown() {
    const storedDoctors = localStorage.getItem('doctors');
    if (storedDoctors) {
      this.doctors = JSON.parse(storedDoctors);
    } else {
      this.doctors = DUMMY_DOCTORS;
    }
    const filteredDoctors = this.doctors.filter(doc => doc.specialization === this.entered_specialization);
    this.availableDoctors = filteredDoctors.map(doc => doc.name);
  }

  private formatDateTime(date: string, time: string): string {
    const fullDate = new Date(date + 'T' + time);
    return this.datePipe.transform(fullDate, 'yyyy-MM-dd, h:mm a') || '';
  }

  private getEmptyPatient(): Patient {
    return {
      pID: '',
      name: '',
      reasonForVisit: '',
      assignedDoctor: '',
      specialization: '',
      scheduleDetails: '',
      status: '',
      date: '',
      time: ''
    };
  }

}
