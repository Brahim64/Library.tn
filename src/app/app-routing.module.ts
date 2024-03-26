import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',component:ProductsListComponent,pathMatch:"full"},
  {path:'search/:param1',component:ProductsListComponent},
  
  {path:'document/:id',component:DocumentDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
