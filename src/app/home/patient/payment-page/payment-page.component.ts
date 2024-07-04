import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient.model';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent {
  patient !: Patient;
  isPaymentDone = false;

  enteredCardNumber = '';
  enteredCardHolderName = '';
  enteredExpiryDate='';
  enteredCVV='';

  constructor(private route: ActivatedRoute, private patientService: PatientService, private router:Router) {}

  ngOnInit() {
    const patientData = this.route.snapshot.paramMap.get('patient');
    console.log(patientData);
    if (patientData) {
      this.patient = JSON.parse(patientData);
    }
  }

  onSubmitPayment() {
    this.patientService.addPatient(this.patient);
    console.log('Patient Details:', this.patient);
    // alert('Payment Successful!');
    this.isPaymentDone = true;
    
  }

  generatePDF() {
    const doc = new jsPDF();

    doc.text('Patient Details', 10, 10);
    doc.text(`Patient ID: ${this.patient.pID}`, 10, 20);
    doc.text(`Name: ${this.patient.name}`, 10, 30);
    doc.text(`Reason for Visit: ${this.patient.reasonForVisit}`, 10, 40);
    doc.text(`Assigned Doctor: ${this.patient.assignedDoctor}`, 10, 50);
    doc.text(`Schedule Details: ${this.patient.scheduleDetails}`, 10, 60);
    doc.text(`Payment Details: ${this.enteredCardNumber}`, 10, 70);

    doc.save('patient-details.pdf');
  }

  onClose()
  {
    this.isPaymentDone = false;
    this.generatePDF();
    this.router.navigate(['/patient'])
  }
}
