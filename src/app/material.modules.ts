import { NgModule,  } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
// importar forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
 import { MatNativeDateModule } from '@angular/material/core';
 import {MatSlideToggleModule} from '@angular/material/slide-toggle';

// vamos construir nossos arrays de registro
@NgModule({
 imports: [
 MatTableModule,
 MatToolbarModule,
 FormsModule,
 ReactiveFormsModule,
 MatRadioModule,
 MatInputModule,
 MatButtonModule,
 MatDatepickerModule,
 MatNativeDateModule,
 MatSlideToggleModule


 ],
 exports: [
 MatTableModule,
 FormsModule,
 ReactiveFormsModule,
 MatRadioModule,
 MatInputModule,
 MatButtonModule,
 MatDatepickerModule,
 MatNativeDateModule,
 MatSlideToggleModule,
 MatToolbarModule

 ]
})
export class TodoMaterialModule{}
