import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoMaterialModule } from './material.modules';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './components/template/footer/footer.component';
import {HeaderComponent } from './components/template/header/header.component';
import { MainComponent } from './components/template/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponents,
    FooterComponent,
    HeaderComponent
    MainComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
