import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FloatySpaceRingUiModule } from '../floaty-space-ring-ui/floaty-space-ring-ui.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FloatySpaceRingUiModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
