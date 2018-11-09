import { Component, Input } from '@angular/core';
import { ProductSummaryViewModel } from './product-summary-viewmodel';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent {
  @Input() model: ProductSummaryViewModel;

  constructor() { }

  getColor = (c: ProductSummaryViewModel) => <any>{
    'color': `rgb(${c.color.join()})`
  }
}
