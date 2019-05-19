import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFittextModule } from 'angular-fittext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryComponent } from './library/library.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AddFilmComponent } from './add-film/add-film.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LibraryComponent,
    CatalogueComponent,
    AddFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFittextModule
  ],
  entryComponents: [
    LoginComponent,
    AddFilmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
