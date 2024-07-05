  // import { Component } from '@angular/core';
  // import { FormsModule } from '@angular/forms';
  // import { Router, RouterLink } from '@angular/router';

  // @Component({
  //   selector: 'app-add-patient-form',
  //   standalone: true,
  //   imports: [FormsModule, RouterLink],
  //   templateUrl: './add-patient-form.component.html',
  //   styleUrl: './add-patient-form.component.css',
  // })
  // export class AddPatientFormComponent {
  //   entered_patient_id = '';
  //   entered_patient_name = '';
  //   entered_reason_for_visit = '';
  //   entered_assigned_doc = '';
  //   entered_appointment_details = '';
  //   entered_status = '';

  //   constructor(
  //     private router: Router
  //   ) {}

  //   onCancel() {
  //     this.router.navigate(['/patient'])

  //   }
  //   onSubmit() {
  //     const patient = {
  //       pID: this.entered_patient_id,
  //       name: this.entered_patient_name,
  //       reasonForVisit: this.entered_reason_for_visit,
  //       assignedDoctor: this.entered_assigned_doc,
  //       scheduleDetails: this.entered_appointment_details,
  //       status: this.entered_status,
  //     };
  //     this.router.navigate(['patient','payment',this.entered_patient_id,{ patient: JSON.stringify(patient) }]);
  //   }
  // }

  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { Router, RouterLink } from '@angular/router';
  import { Doctor } from '../../doctor/doctor.model';
  import { DUMMY_DOCTORS } from '../../../dummy-doctors';
  import { CommonModule, DatePipe } from '@angular/common';
  import { PatientService } from '../patient.service';

  @Component({
    selector: 'app-add-patient-form',
    standalone: true,
    imports: [FormsModule, RouterLink, DatePipe, CommonModule],
    templateUrl: './add-patient-form.component.html',
    styleUrls: ['./add-patient-form.component.css'],
    providers: [DatePipe]
  })
  export class AddPatientFormComponent {
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


    constructor(private patientService: PatientService, private router: Router,private datePipe: DatePipe) {}
    ngOnInit() {
      const storedDoctors = localStorage.getItem('doctors');
      if (storedDoctors) {
        this.doctors = JSON.parse(storedDoctors);
      } else {
        this.doctors = DUMMY_DOCTORS;
      }
    }

    onCancel() {
      this.router.navigate(['/patient']);
    }

    onSubmit() {
      if (
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
      const timestamp = new Date().getTime().toString();
      const pID = 'P' + timestamp; 
      const formattedDateTime = this.formatDateTime(this.entered_appointment_date, this.entered_appointment_time);
      const patient = {
        pID: pID,
        name: this.entered_patient_name,
        reasonForVisit: this.entered_reason_for_visit,
        assignedDoctor: this.entered_assigned_doc,
        specialization: this.entered_specialization,
        scheduleDetails: formattedDateTime,
        status: this.entered_status,
        date: this.entered_appointment_date,
        time: this.entered_appointment_time,
      };
      this.router.navigate(['patient', 'payment', pID, { patient: JSON.stringify(patient) }]);
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
  }
