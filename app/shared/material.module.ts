import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  declarations: [],
  providers: []
})
export class MaterialModule {}
