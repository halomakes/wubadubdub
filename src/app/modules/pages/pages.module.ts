import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FloatySpaceRingUiModule } from '../floaty-space-ring-ui/floaty-space-ring-ui.module';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, SkillsComponent],
  imports: [
    CommonModule,
    FloatySpaceRingUiModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    SkillsComponent
  ]
})
export class PagesModule { }
