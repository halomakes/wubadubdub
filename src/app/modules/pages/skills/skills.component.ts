import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../components/navbar.service';
import { LanguageIcon } from './language-icon';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Specialty } from './specialty';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public navbar: NavbarService, private http: HttpClient) { }
  languages: Array<LanguageIcon>;
  specialties: Array<Specialty>;

  ngOnInit() {
    this.navbar.makeOpaque();
    this.loadLanguages();
    this.loadSpecialties();
  }

  private loadLanguages = (): Subscription =>
    this.http.get<LanguageIcon[]>('assets/data/languages.json')
      .subscribe(r => this.languages = r)

  private loadSpecialties = (): Subscription =>
    this.http.get<Specialty[]>('assets/data/specialties.json')
      .subscribe(r => this.specialties = r)

  getStyle = (l: LanguageIcon) => {
    return {
      'background-image': `url('${this.getImageUri(l.fileName)}')`
    };
  }

  getImageUri = (fileName: string) => `assets/svg/icon/${fileName}.svg`;
