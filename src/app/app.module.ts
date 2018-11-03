import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatySpaceRingUiModule } from './modules/floaty-space-ring-ui/floaty-space-ring-ui.module';
import { PagesModule } from './modules/pages/pages.module';
import { ComponentsModule } from './modules/components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FloatySpaceRingUiModule,
    PagesModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
