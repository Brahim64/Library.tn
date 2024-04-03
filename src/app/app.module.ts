import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './auth/login/login.component';
import { DocumentService } from './service/document.service';
import { baseURL } from './shared/baseUrl';
import { HttpClientModule } from "@angular/common/http";
import { DocumentEditerComponent } from './document-editer/document-editer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ProductsListComponent,
    DocumentDetailsComponent,
    SearchComponent,
    LoginComponent,
    DocumentEditerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DocumentService,
    {provide:'baseURL',useValue:baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
