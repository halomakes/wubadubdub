import { Component, Input, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'fsr-button',
  templateUrl: './fsr-button.component.html',
  styleUrls: ['./fsr-button.component.scss']
})
export class FsrButtonComponent {
  @Input() size: string;
  private gradient: { x: number, y: number } = { x: 0, y: 0 };

  constructor(public el: ElementRef<HTMLElement>) { }

  @HostListener('mousemove', ['$event'])
  onmousemove = (event: MouseEvent): { x: number, y: number } =>
    this.gradient = {
      x: event.pageX - this.el.nativeElement.offsetLeft,
      y: event.pageY - this.el.nativeElement.offsetTop
    }

  private getBackgroundGradient = () => {
    return {
      'background': `radial-gradient(circle at ${this.gradient.x}px ${this.gradient.y}px, #8941f4, #5219a8)`
    };
  }

  private getBorderGradient = () => {
    return {
      'background': `radial-gradient(circle at ${this.gradient.x}px ${this.gradient.y}px, #ab7af4 0%, #8941f4 20%, #5219a8 100%)`
    };
  }
}
