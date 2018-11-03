import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsrButtonComponent } from './fsr-button.component';

@NgModule({
  declarations: [FsrButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FsrButtonComponent
  ]
})
export class FsrButtonModule { }
