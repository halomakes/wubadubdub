import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarService } from '../../components/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navbar: NavbarService) { }

  ngOnInit() {
    this.navbar.makeTransparent();
  }

  @HostListener('window:scroll', ['$event'])
  private checkScroll = (event: any): void => {
    if (event.srcElement.scrollingElement.scrollTop > 0) {
      this.navbar.makeOpaque();
    } else {
      this.navbar.makeTransparent();
    }
  }
}
