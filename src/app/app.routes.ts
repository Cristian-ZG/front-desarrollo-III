import { Routes } from '@angular/router';

//Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full'},
    { path: '**', redirectTo: '', pathMatch:'full'}
];
