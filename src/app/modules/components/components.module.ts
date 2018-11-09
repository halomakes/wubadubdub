import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FloatySpaceRingUiModule } from '../floaty-space-ring-ui/floaty-space-ring-ui.module';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';

@NgModule({
  declarations: [NavbarComponent, TimelineComponent, ProductSummaryComponent],
  imports: [
    CommonModule,
    FloatySpaceRingUiModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    TimelineComponent,
    ProductSummaryComponent
  ]
})
export class ComponentsModule { }
