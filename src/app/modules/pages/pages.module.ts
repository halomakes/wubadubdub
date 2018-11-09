import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FloatySpaceRingUiModule } from '../floaty-space-ring-ui/floaty-space-ring-ui.module';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { CreationsComponent } from './creations/creations.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, SkillsComponent, ExperienceComponent, ContactComponent, CreationsComponent],
  imports: [
    CommonModule,
    FloatySpaceRingUiModule,
    RouterModule,
    HttpClientModule,
    TooltipModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    SkillsComponent
  ]
})
export class PagesModule { }
