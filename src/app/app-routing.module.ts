import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { SkillsComponent } from './modules/pages/skills/skills.component';
import { ExperienceComponent } from './modules/pages/experience/experience.component';
import { ContactComponent } from './modules/pages/contact/contact.component';
import { CreationsComponent } from './modules/pages/creations/creations.component';
import { GraphicsComponent } from './modules/pages/graphics/graphics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'creations', component: CreationsComponent },
  { path: 'creations/graphics', component: GraphicsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
