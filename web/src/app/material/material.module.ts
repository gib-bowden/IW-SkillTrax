import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonToggleModule,
  MatIconModule,
  MatListModule

  } from '@angular/material';
@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule


  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule

  ],
  declarations: []
})
export class MaterialModule { }
