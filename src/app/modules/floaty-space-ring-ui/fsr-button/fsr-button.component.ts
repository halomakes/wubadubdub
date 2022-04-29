import { Component, Input, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { FsrMouseTrackerComponent } from '../fsr-mouse-tracker/fsr-mouse-tracker.component';
import { Coordinate } from './coordinate';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fsr-button',
  templateUrl: './fsr-button.component.html',
  styleUrls: ['./fsr-button.component.scss']
})
export class FsrButtonComponent implements AfterViewInit, OnDestroy {
  @Input() size: string;
  @Input() color = 'primary';
  @Input() solid = true;
  @Input() fixed = false;
  @Input() href: string;
  @Input() target: '_blank';
  @Input() inactive = false;
  darkText: boolean;

  public borderGradient: any = {};
  public backgroundGradient: any = {};
  protected pointerPosition: Coordinate = { x: null, y: null };
  protected gradientPosition: Coordinate = { x: 0, y: 0 };
  private animationFrame: number = null;

  constructor(public el: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.updatePositioning();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }

  onClick = () => {
    if (this.href) {
      window.open(this.href, this.target);
    }
  }

  protected animate = () => {
    this.updatePositioning();
    this.animationFrame = window.requestAnimationFrame(this.animate);
  }

  protected updatePositioning = (): void => {
    if (FsrMouseTrackerComponent.pointerPosition.x !== this.pointerPosition.x || FsrMouseTrackerComponent.pointerPosition.y !== this.pointerPosition.y) {
      this.pointerPosition = FsrMouseTrackerComponent.pointerPosition;
      this.gradientPosition = {
        x: FsrMouseTrackerComponent.pointerPosition.x - this.el.nativeElement.offsetLeft,
        y: FsrMouseTrackerComponent.pointerPosition.y - this.el.nativeElement.offsetTop - (this.fixed ? FsrMouseTrackerComponent.scrollPosition : 0)
      };
      this.borderGradient = this.getBorderGradient();
      this.backgroundGradient = this.getBackgroundGradient();
    }
  }

  getBackgroundGradient = () => {
    if (this.solid) {
      switch (this.color) {
        case 'primary':
          return {
            'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, #8941f4, #5219a8)`
          };
        case 'grey':
          return {
            'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, rgba(0,0,0,.05) 0%, transparent 50%)`
          };
        default:
          return {
            'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, rgba(255,255,255,.2) 0%, transparent 50%)`
          };
      }
    } else {
      switch (this.color) {
        case 'grey':
          return {
            'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, rgba(0,0,0,.05) 0%, transparent 50%)`
          };
        default:
          return {
            'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, rgba(255,255,255,.2) 0%, transparent 50%)`
          };
      }
    }
  }

  getBorderGradient = () => {
    switch (this.color) {
      case 'primary':
        return {
          'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, #ab7af4 0%, #8941f4 20%, #5219a8 100%)`
        };
      case 'white':
        return {
          'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, rgba(255,255,255,.6) 0%, transparent 50%)`
        };
      case 'grey':
        return {
          'background': `radial-gradient(circle at ${this.gradientPosition.x}px ${this.gradientPosition.y}px, rgba(0,0,0,.15) 0%, transparent 50%)`
        };
      default:
        return {};
    }
  }
}
