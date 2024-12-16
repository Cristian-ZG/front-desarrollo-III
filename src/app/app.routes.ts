import { Routes } from '@angular/router';

//Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full'},
    { path: 'product/:product_id', component:ProductDetailComponent },
    { path: '**', redirectTo: '', pathMatch:'full'}
];
