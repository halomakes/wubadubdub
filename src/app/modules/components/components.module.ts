import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FloatySpaceRingUiModule } from '../floaty-space-ring-ui/floaty-space-ring-ui.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FloatySpaceRingUiModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
