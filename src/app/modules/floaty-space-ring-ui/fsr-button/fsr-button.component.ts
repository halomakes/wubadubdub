import { Component, Input, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { RevealComponent } from '../reaveal-component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fsr-button',
  templateUrl: './fsr-button.component.html',
  styleUrls: ['./fsr-button.component.scss']
})
export class FsrButtonComponent extends RevealComponent implements AfterViewInit, OnDestroy {
  @Input() size: string;
  @Input() color = 'primary';
  @Input() solid = true;
  @Input() fixed = false;
  @Input() href: string;
  @Input() target: '_blank';
  @Input() inactive = false;
  darkText: boolean;

  constructor(public el: ElementRef<HTMLElement>) { super(el); }

  onClick = () => {
    if (this.href) {
      window.open(this.href, this.target);
    }
  }

  protected override updateStyles(): void {
    this.borderGradient = this.getBorderGradient();
    this.backgroundGradient = this.getBackgroundGradient();
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
