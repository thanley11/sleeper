import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatTableModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule
  ]
})

export class AppMaterialModule { }
