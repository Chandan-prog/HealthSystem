import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-doctor-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-doctor-form.component.html',
  styleUrl: './add-doctor-form.component.css',
})
export class AddDoctorFormComponent {
  entered_id=''
  entered_name = '';
  entered_specs = '';
  entered_exp = '';
  entered_fees = '';
  entered_weekdays :{ [key: string]: boolean }= {
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
  };
  entered_start_time = '';
  entered_end_time = '';
  availableEndTimes: string[] = [];

  constructor(private doctorService:DoctorService){}
  

  @Output() close = new EventEmitter<void>()
  onCancel() {
    this.close.emit();
  }
  generateUniqueId() {
    const now = new Date();
    const datePart = now.toISOString().slice(0, 10).replace(/-/g, ''); 
    const timePart = now.toTimeString().slice(0, 8).replace(/:/g, ''); 
    const idString = `1${datePart}${timePart}`; 
    return Number(idString);
  }
  formatTimeTo12Hour(time: string): string {
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour, 10);
    const ampm = hourNum >= 12 ? 'PM' : 'AM';
    const formattedHour = hourNum % 12 === 0 ? 12 : hourNum % 12;
    return `${formattedHour}:${minute} ${ampm}`;
  }

  endTimeValidation(){
    if(this.entered_start_time>=this.entered_end_time)
    {
      alert('End time must be later than start time');
      return false;
    }
    else{
      return true;
    }
    
  }

  onSubmit() {
    if (
      !this.entered_name ||
      !this.entered_specs ||
      !this.entered_exp ||
      !this.entered_fees ||
      !this.entered_start_time ||
      !this.entered_end_time
    ) {
      alert('Kindly fill all the fields.');
      return;
    }
    if(!this.endTimeValidation()){
      return
    }
    const weekdays = Object.keys(this.entered_weekdays).filter(day => this.entered_weekdays[day]).join(', ');
    const availability = `${weekdays}, ${this.formatTimeTo12Hour(this.entered_start_time)} to ${this.formatTimeTo12Hour(this.entered_end_time)}`;

    
    this.doctorService.addDoctor({
      id: this.generateUniqueId(),
      name: this.entered_name,
      specialization: this.entered_specs,
      experience: +this.entered_exp,
      fee: +this.entered_fees,
      availability: availability,
    });
    this.close.emit();
  }
}