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
    getAllPatients(): Patient[] {
      return this.patients;
    }
  
    getPatientById(id: string): Patient | undefined {
      return this.patients.find(p => p.pID === id);
    }
  
    updatePatient(updatedPatient: Patient): void {
      const index = this.patients.findIndex(p => p.pID === updatedPatient.pID);
      if (index !== -1) {
        this.patients[index] = updatedPatient;
        localStorage.setItem('patients', JSON.stringify(this.patients));
      }
    }
  
    removePatient(id: string): void {
      this.patients = this.patients.filter(patient => patient.pID !== id);
      localStorage.setItem('patients', JSON.stringify(this.patients));
    }
  
}