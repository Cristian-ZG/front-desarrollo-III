import { Routes } from '@angular/router';

//Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddReviewComponent } from './components/add-review/add-review.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full'},
    { path: 'product/:product_id', component:ProductDetailComponent },
    { path: 'add-review/:product_id', component: AddReviewComponent},
    { path: '**', redirectTo: '', pathMatch:'full'}
];
