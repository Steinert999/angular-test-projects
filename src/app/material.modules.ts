import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';


// vamos construir nossos arrays de registro
@NgModule({
 imports: [
 MatTableModule,
 MatToolbarModule
 ],
 exports: [
 MatTableModule,

 ]
})
export class TodoMaterialModule{}
