import { Routes } from '@angular/router';

//Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: '**', redirectTo: '', pathMatch:'full'}

];
