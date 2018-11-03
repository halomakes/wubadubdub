import { Component, OnInit } from '@angular/core';
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

}
