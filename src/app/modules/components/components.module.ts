import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FloatySpaceRingUiModule } from '../floaty-space-ring-ui/floaty-space-ring-ui.module';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [NavbarComponent, TimelineComponent, ProductSummaryComponent, GalleryComponent],
  imports: [
    CommonModule,
    FloatySpaceRingUiModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    TimelineComponent,
    ProductSummaryComponent,
    GalleryComponent
  ]
})
export class ComponentsModule { }
