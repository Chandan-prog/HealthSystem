import { Injectable } from "@angular/core";
import { Doctor } from "./doctor.model";
import { DUMMY_DOCTORS } from "../../dummy-doctors";

@Injectable({
    providedIn:'root'
})
export class DoctorService{
    doctors : Doctor[]  = [];
    addDoctor(info: Doctor)
    {
        const storedDoctors = localStorage.getItem('doctors');
        if (storedDoctors) {
            this.doctors = JSON.parse(storedDoctors);
            this.doctors.push(info);
            localStorage.setItem('doctors', JSON.stringify(this.doctors));
          } else {
            this.doctors = DUMMY_DOCTORS;
            this.doctors.push(info);
            localStorage.setItem('doctors', JSON.stringify(this.doctors));
          }
    }
}