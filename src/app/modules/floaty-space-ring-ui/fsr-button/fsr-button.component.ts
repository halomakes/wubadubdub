import { Component, Input, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'fsr-button',
  templateUrl: './fsr-button.component.html',
  styleUrls: ['./fsr-button.component.scss']
})
export class FsrButtonComponent {
  @Input() size: string;
  @Input() color = 'primary';
  @Input() solid = true;
  private gradient: { x: number, y: number } = { x: 0, y: 0 };

  constructor(public el: ElementRef<HTMLElement>) { console.log(this.solid); }

  @HostListener('document:mousemove', ['$event'])
  onmousemove = (event: MouseEvent): { x: number, y: number } =>
    this.gradient = {
      x: event.pageX - this.el.nativeElement.offsetLeft,
      y: event.pageY - this.el.nativeElement.offsetTop
    }

  private getBackgroundGradient = () => {
    if (this.solid) {
      return {
        'background': `radial-gradient(circle at ${this.gradient.x}px ${this.gradient.y}px, #8941f4, #5219a8)`
      };
    } else {
      return {
        'background': `radial-gradient(circle at ${this.gradient.x}px ${this.gradient.y}px, rgba(255,255,255,.2) 0%, transparent 50%)`
      };
    }
  }

  private getBorderGradient = () => {
    if (this.color === 'primary') {
      return {
        'background': `radial-gradient(circle at ${this.gradient.x}px ${this.gradient.y}px, #ab7af4 0%, #8941f4 20%, #5219a8 100%)`
      };
    } else {
      return {
        'background': `radial-gradient(circle at ${this.gradient.x}px ${this.gradient.y}px, rgba(255,255,255,.6) 0%, transparent 50%)`
      };
    }
  }
}
