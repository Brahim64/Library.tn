import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';

const routes: Routes = [
  
  {path:'',component:ProductsListComponent,pathMatch:"full"},
  {path:'documents',component:ProductsListComponent},
  {path:'documents/:id',component:DocumentDetailsComponent},
  {path:'documents/:type/:category',component:ProductsListComponent},
  {path:'search/:param1',component:ProductsListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
