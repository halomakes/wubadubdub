import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { NavbarService } from '../../components/navbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  tiles: Array<Tile>;

  constructor(public http: HttpClient, public navbar: NavbarService) { }

  ngOnInit() {
    this.loadLinks();
    this.navbar.makeOpaque();
  }

  loadLinks = (): Subscription =>
    this.http.get<Tile[]>('assets/data/contact/social.json')
      .subscribe(d => {
        this.tiles = d;
        this.tiles.forEach(t => t.style = this.getDelayedSlideUpAnimation());
      })

  getDelayedSlideUpAnimation = () => {
    const delay: number = this.getRandomDelay();
    return {
      'animation': `fall-in 1.4s forwards ease ${delay}ms`,
      'z-index': `${Math.floor(delay / 100)}`
    };
  }

  getRandomDelay = (): number => Math.floor(Math.random() * 800) + 300;
}
