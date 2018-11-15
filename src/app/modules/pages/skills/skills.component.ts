import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../components/navbar.service';
import { LanguageIcon } from './language-icon';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Specialty } from './specialty';
import { ContentBlock } from '../content-block';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public navbar: NavbarService, private http: HttpClient) { }
  languages: Array<LanguageIcon>;
  specialties: Array<Specialty>;
  interpersonal: Array<string>;
  content: ContentBlock;

  ngOnInit() {
    this.navbar.makeOpaque();
    this.loadLanguages();
    this.loadSpecialties();
    this.loadInterpersonal();
    this.loadContent();
  }

  private loadLanguages = (): Subscription =>
    this.http.get<LanguageIcon[]>('assets/data/skills/languages.json')
      .subscribe(r => this.languages = r)

  private loadSpecialties = (): Subscription =>
    this.http.get<Specialty[]>('assets/data/skills/specialties.json')
      .subscribe(r => this.specialties = r)

  private loadInterpersonal = (): Subscription =>
    this.http.get<string[]>('assets/data/skills/interpersonal.json')
      .subscribe(r => this.interpersonal = r)

  private loadContent = (): Subscription =>
    this.http.get<ContentBlock>('assets/data/skills/skills.json')
      .subscribe(r => this.content = r)

  getStyle = (l: LanguageIcon) => <any>{
    'background-image': `url('${this.getImageUri(l.fileName)}')`,
    'animation': this.getDelayedFallInAnimation()
  }

  getImageUri = (fileName: string) => `assets/svg/icon/${fileName}.svg`;

  getAnimationStyle = () => <any>{
    'animation': this.getDelayedFallInAnimation()
  }

  getDelayedFallInAnimation = (): string => `fall-in 2s forwards ease ${this.getRandomDelay()}ms`;

  getRandomDelay = (): number => Math.floor(Math.random() * 1400) + 300;
}
