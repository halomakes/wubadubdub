import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarService } from '../../components/navbar.service';
import { ContentBlock } from '../content-block';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navbar: NavbarService, private http: HttpClient) { }
  public mainContent: ContentBlock;
  public secondaryContent: ContentBlock;

  ngOnInit() {
    this.navbar.makeTransparent();
    this.loadMainContent();
    this.loadSecondaryContent();
  }

  private loadMainContent = (): Subscription =>
    this.http.get<ContentBlock>('assets/data/home.json')
      .subscribe(r => this.mainContent = r)

  private loadSecondaryContent = (): Subscription =>
    this.http.get<ContentBlock>('assets/data/home-secondary.json')
      .subscribe(r => this.secondaryContent = r)

  @HostListener('window:scroll', ['$event'])
  private checkScroll = (event: any): void => {
    if (event.srcElement.scrollingElement.scrollTop > 0) {
      this.navbar.makeOpaque();
    } else {
      this.navbar.makeTransparent();
    }
  }
}
