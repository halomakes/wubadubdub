import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../components/navbar.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ProductSummaryViewModel } from '../../components/product-summary/product-summary-viewmodel';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {
  creations: Array<ProductSummaryViewModel>;

  constructor(private navbar: NavbarService,
    private http: HttpClient) { }

  ngOnInit() {
    this.navbar.makeOpaque();
    this.loadList();
  }

  loadList = (): Subscription =>
    this.http.get<ProductSummaryViewModel[]>('assets/data/creations/list.json')
      .subscribe(r => this.creations = r)
}
