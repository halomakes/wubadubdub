import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FloatySpaceRingUiModule } from '../floaty-space-ring-ui/floaty-space-ring-ui.module';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [HomeComponent, SkillsComponent, ExperienceComponent],
  imports: [
    CommonModule,
    FloatySpaceRingUiModule,
    RouterModule,
    HttpClientModule,
    TooltipModule
  ],
  exports: [
    HomeComponent,
    SkillsComponent
  ]
})
export class PagesModule { }
