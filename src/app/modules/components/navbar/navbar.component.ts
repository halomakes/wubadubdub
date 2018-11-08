import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public navbar: NavbarService,
    private scroll: NgAnimateScrollService,
    private route: ActivatedRoute,
    private router: Router) { }

  links = [
    {
      routerLink: ['/'],
      label: 'Home'
    }, {
      routerLink: ['/skills'],
      label: 'Skills'
    }, {
      routerLink: ['/experience'],
      label: 'Experience'
    }, {
      routerLink: ['/creations'],
      label: 'Creations'
    }, {
      routerLink: ['/contact'],
      label: 'Contact'
    }
  ];

  scrollToTop = (routerLink: Array<any>): void => {
    if (this.isActive(routerLink)) {
      this.scroll.scrollToElement('top', 500);
    }
  }

  isActive = (routerLink: Array<any>): boolean => this.router.isActive(this.router.createUrlTree(routerLink), true);
}
