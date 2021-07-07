import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


// vamos construir nossos arrays de registro
@NgModule({
 imports: [
 MatTableModule,
 MatToolbarModule,
 MatExpansionModule,
 MatCheckboxModule,
 MatButtonModule,
 MatIconModule
 ],
 exports: [
 MatTableModule,
 MatToolbarModule,
 MatExpansionModule,
 MatCheckboxModule,
 MatButtonModule,
 MatIconModule
 ]
})
export class TodoMaterialModule{}
