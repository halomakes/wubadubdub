import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsrButtonModule } from './fsr-button/fsr-button.module';
import { FsrTileButtonComponent } from './fsr-tile-button/fsr-tile-button.component';
import { FsrMouseTrackerComponent } from './fsr-mouse-tracker/fsr-mouse-tracker.component';

@NgModule({
  declarations: [FsrTileButtonComponent, FsrMouseTrackerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FsrButtonModule,
    FsrTileButtonComponent,
    FsrMouseTrackerComponent
  ]
})
export class FloatySpaceRingUiModule { }
