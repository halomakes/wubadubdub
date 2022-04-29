import { Component, OnInit, Input, HostListener, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Coordinate } from '../fsr-button/coordinate';
import { FsrMouseTrackerComponent } from '../fsr-mouse-tracker/fsr-mouse-tracker.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fsr-tile',
  templateUrl: './fsr-tile-button.component.html',
  styleUrls: ['./fsr-tile-button.component.scss']
})
export class FsrTileButtonComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() href: string;
  @Input() target: '_blank';
  @Input() fixed = false;
  @Input() color: Array<number>;
  @Input() mega = false;
  private light: Array<number>;
  private highlight: Array<number>;
  private primary: Array<number>;
  private dark: Array<number>;
  protected pointerPosition: Coordinate = { x: 0, y: 0 };
  protected gradientPosition: Coordinate = { x: 0, y: 0 };
  private animationFrame: number = null;
  public borderGradient: any = {};
  public backgroundGradient: any = {};

  constructor(public el: ElementRef<HTMLElement>) { }

  ngOnInit() {
    this.setColors(this.color);
  }

  ngAfterViewInit(): void {
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }

  protected animate = () => {
    if (FsrMouseTrackerComponent.pointerPosition.x !== this.pointerPosition.x || FsrMouseTrackerComponent.pointerPosition.y !== this.pointerPosition.y) {
      this.pointerPosition = FsrMouseTrackerComponent.pointerPosition;
      this.gradientPosition = {
        x: FsrMouseTrackerComponent.pointerPosition.x - this.el.nativeElement.offsetLeft,
        y: FsrMouseTrackerComponent.pointerPosition.y - this.el.nativeElement.offsetTop - (this.fixed ? FsrMouseTrackerComponent.scrollPosition : 0)
      };
      this.borderGradient = this.getBorderGradient();
      this.backgroundGradient = this.getBackgroundGradient();
    }
    this.animationFrame = window.requestAnimationFrame(this.animate);
  }

  private setColors = (baseColor: Array<number>): void => {
    this.dark = baseColor;
    this.highlight = baseColor.map(c => c * 2.6);
    this.light = baseColor.map(c => c * 2.0);
    this.primary = baseColor.map(c => c * 1.4);
  }

  onClick = () => {
    if (this.href) {
      window.open(this.href);
    }
  }

  getBackgroundGradient = () => <any>{
    'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, rgb(${this.primary.join()}), rgb(${this.dark.join()}))`
  }

  getBorderGradient = () => <any>{
    // tslint:disable-next-line:max-line-length
    'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, rgb(${this.highlight.join()}) 0%, rgb(${this.light.join()}) 20%, rgb(${this.dark.join()}) 100%)`
  }

  getGlow = () => <any>{
    'box-shadow': `0 0 .8rem rgba(${this.dark.join()}, .5)`
  }
}
