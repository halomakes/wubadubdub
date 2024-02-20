import { Component, Inject, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavLink } from './nav-link';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: Array<any>;

  constructor(public navbar: NavbarService,
    private scroll: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.loadLinks();
  }

  loadLinks = (): Subscription => this.http.get<NavLink[]>('assets/data/navigation/links.json').subscribe(r => this.links = r);

  scrollToTop = (routerLink: Array<any>): void => {
    if (this.isActive(routerLink)) {
      this.scroll.scroll({
        document: this.document,
        scrollTarget: 'top'
      });
    }
  }

  isActive = (routerLink: Array<any>): boolean => this.router.isActive(this.router.createUrlTree(routerLink), true);
}
