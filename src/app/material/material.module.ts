import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

const MatirialComponent = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
]

@NgModule({
  imports: [MatirialComponent],
  exports: [MatirialComponent],
})
export class MaterialModule { }
