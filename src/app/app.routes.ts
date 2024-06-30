import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { DoctorComponent } from './home/doctor/doctor.component';
import { PatientComponent } from './home/patient/patient.component';
import { AddPatientFormComponent } from './home/patient/add-patient-form/add-patient-form.component';
import { EditPatientComponent } from './home/patient/edit-patient/edit-patient.component';
import { PaymentPageComponent } from './home/patient/payment-page/payment-page.component';
import { PatientListComponent } from './home/patient/patient-list/patient-list.component';

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
        component: DoctorComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'patient',
        component: PatientComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path:'',
                component: PatientListComponent,
            },
            {
                path: 'create-patient',
                component: AddPatientFormComponent
            },
            {
                path: 'edit-patient/:id',
                component: EditPatientComponent
            },
            {
                path: 'payment/:id',
                component: PaymentPageComponent
            }
        ]
    },
];
