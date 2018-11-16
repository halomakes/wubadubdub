import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../components/navbar.service';
import { HttpClient } from '@angular/common/http';
import { Graphic } from '../../components/gallery/graphic';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {
  images: Array<Graphic>;

  constructor(private navbar: NavbarService, private http: HttpClient) { }

  ngOnInit() {
    this.navbar.makeOpaque();
    this.loadImages().subscribe();
  }


  loadImages = (): Observable<Graphic[]> =>
    this.http.get<Graphic[]>(`assets/data/creations/graphics.json`)
      .pipe(map(r => this.images = r))
}
