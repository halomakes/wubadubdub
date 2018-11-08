import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fsr-tile',
  templateUrl: './fsr-tile-button.component.html',
  styleUrls: ['./fsr-tile-button.component.scss']
})
export class FsrTileButtonComponent implements OnInit {
  @Input() href: string;
  @Input() target: '_blank';
  @Input() fixed = false;
  @Input() color: Array<number>;
  @Input() mega = false;
  private light: Array<number>;
  private highlight: Array<number>;
  private primary: Array<number>;
  private dark: Array<number>;
  private lastScrollPos = 0;
  private origin: { x: number, y: number } = { x: 0, y: 0 };

  constructor(public el: ElementRef<HTMLElement>) { }

  ngOnInit() {
    this.setColors(this.color);
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

  @HostListener('window:scroll', ['$event'])
  private checkScroll = (event: any): void => {
    this.lastScrollPos = event.srcElement.scrollingElement.scrollTop;
  }

  @HostListener('window:mousemove', ['$event'])
  onmousemove = (event: MouseEvent): void => {
    this.origin = {
      x: event.pageX - this.el.nativeElement.offsetLeft,
      y: event.pageY - this.el.nativeElement.offsetTop - (this.fixed ? this.lastScrollPos : 0)
    };
  }

  getBackgroundGradient = () => <any>{
    'background': `radial-gradient(circle at ${this.origin.x}px ${this.origin.y}px, rgb(${this.primary.join()}), rgb(${this.dark.join()}))`
  }

  getBorderGradient = () => <any>{
    // tslint:disable-next-line:max-line-length
    'background': `radial-gradient(circle at ${this.origin.x}px ${this.origin.y}px, rgb(${this.highlight.join()}) 0%, rgb(${this.light.join()}) 20%, rgb(${this.dark.join()}) 100%)`
  }

  getGlow = () => <any>{
    'box-shadow': `0 0 .8rem rgba(${this.dark.join()}, .5)`
  }
}
