import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-add-doctor-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-doctor-form.component.html',
  styleUrl: './add-doctor-form.component.css',
})
export class AddDoctorFormComponent {
  entered_id=''
  entered_name = '';
  entered_specs = '';
  entered_exp = '';
  entered_fees = '';
  entered_availability = '';

  constructor(private doctorService:DoctorService){}
  

  @Output() close = new EventEmitter<void>()
  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.doctorService.addDoctor({
      id: +this.entered_id,
      name: this.entered_name,
      specialization: this.entered_specs,
      experience: +this.entered_exp,
      fee: +this.entered_fees,
      availability: this.entered_availability,
    });
    this.close.emit();
  }
}
