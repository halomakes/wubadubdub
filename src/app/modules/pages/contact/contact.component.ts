import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  tiles: Array<Tile>;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.loadLinks();
  }

  loadLinks = (): Subscription =>
    this.http.get<Tile[]>('assets/data/contact/social.json')
      .subscribe(d => this.tiles = d)
}
