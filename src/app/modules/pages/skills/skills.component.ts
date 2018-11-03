import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../components/navbar.service';
import { LanguageIcon } from './language-icon';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public navbar: NavbarService, private http: HttpClient) { }
  private languages: Array<LanguageIcon>;

  ngOnInit() {
    this.navbar.makeOpaque();
    this.loadLanguages();
  }

  private loadLanguages = (): Subscription =>
    this.http.get<LanguageIcon[]>('assets/data/languages.json')
      .subscribe(r => this.languages = r)

  private getStyle = (l: LanguageIcon) => {
    return {
      'background-image': `url('assets/svg/icon/${l.fileName}.svg')`
    };
  }
}
