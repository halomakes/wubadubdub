import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../components/navbar.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public navbar: NavbarService) { }

  ngOnInit() {
    this.navbar.makeOpaque();
  }

}
