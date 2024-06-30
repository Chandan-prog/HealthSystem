import { Injectable } from "@angular/core";
import { Patient } from "./patient.model";
import { DUMMY_PATIENTS} from "../../dummy-patients";

@Injectable({
    providedIn:'root'
})
export class PatientService{
    patients : Patient[]  = [];
    addPatient(info: Patient)
    {
        const storedPatients = localStorage.getItem('patients');
        if (storedPatients) {
            this.patients = JSON.parse(storedPatients);
            this.patients.push(info);
            localStorage.setItem('patients', JSON.stringify(this.patients));
          } else {
            this.patients = DUMMY_PATIENTS;
            this.patients.push(info);
            localStorage.setItem('patients', JSON.stringify(this.patients));
          }
    }
}