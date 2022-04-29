import { Component, HostListener, OnInit } from '@angular/core';
import { Coordinate } from '../fsr-button/coordinate';

@Component({
  selector: 'fsr-mouse-tracker',
  templateUrl: './fsr-mouse-tracker.component.html',
  styleUrls: ['./fsr-mouse-tracker.component.scss']
})
export class FsrMouseTrackerComponent implements OnInit {
  public static pointerPosition: Coordinate = { x: 0, y: 0 };
  public static scrollPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove = (event: MouseEvent): void => {
    FsrMouseTrackerComponent.pointerPosition = {
      x: event.pageX,
      y: event.pageY
    };
  }

  @HostListener('window:scroll', ['$event'])
  onScroll = (event: any): void => {
    FsrMouseTrackerComponent.scrollPosition = event.srcElement.scrollingElement.scrollTop;
  }
}
