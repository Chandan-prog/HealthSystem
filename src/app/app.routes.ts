import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { DoctorComponent } from './home/doctor/doctor.component';
import { PatientComponent } from './home/patient/patient.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'doctor',
        component: DoctorComponent
    },
    {
        path: 'patient',
        component: PatientComponent
    },
];
