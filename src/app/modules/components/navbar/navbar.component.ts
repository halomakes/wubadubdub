import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public navbar: NavbarService, private scroll: NgAnimateScrollService) { }

  scrollToTop = (): void => this.scroll.scrollToElement('top', 500);
}
