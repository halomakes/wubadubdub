import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsrButtonModule } from './fsr-button/fsr-button.module';
import { FsrTileButtonComponent } from './fsr-tile-button/fsr-tile-button.component';

@NgModule({
  declarations: [FsrTileButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FsrButtonModule,
    FsrTileButtonComponent
  ]
})
export class FloatySpaceRingUiModule { }
