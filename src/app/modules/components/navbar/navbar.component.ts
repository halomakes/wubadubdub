import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavLink } from './nav-link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: Array<any>;

  constructor(public navbar: NavbarService,
    private scroll: NgAnimateScrollService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.loadLinks();
  }

  loadLinks = (): Subscription => this.http.get<NavLink[]>('assets/data/navigation/links.json').subscribe(r => this.links = r);

  scrollToTop = (routerLink: Array<any>): void => {
    if (this.isActive(routerLink)) {
      this.scroll.scrollToElement('top', 500);
    }
  }

  isActive = (routerLink: Array<any>): boolean => this.router.isActive(this.router.createUrlTree(routerLink), true);
}
