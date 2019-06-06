import { NgModule } from '@angular/core'
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSortModule
  ],
  exports: [
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSortModule
  ]
})
export class MaterialModule {}
