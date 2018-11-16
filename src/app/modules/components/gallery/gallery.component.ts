import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Graphic } from './graphic';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() images: Array<Graphic>;
  selectedImage: Graphic;

  constructor(private sanitizer: DomSanitizer) { }

  orderImages = (a: Graphic, b: Graphic) => a.sortOrder - b.sortOrder;

  sanitizeUrl = (url: string) => this.sanitizer.bypassSecurityTrustResourceUrl(url);

  highlightImage = ($event: any, image: Graphic) => {
    this.selectedImage = image;
    const pos: DOMRect = $event.target.getBoundingClientRect();
    $event.srcElement.style.position = 'fixed';
    $event.srcElement.style.left = `${pos.x}px`;
    $event.srcElement.style.top = `${pos.y}px`;
    $event.srcElement.classList.add('selected');
  }

  exitSelection = () => {
    this.selectedImage = null;
    const targets = document.querySelectorAll('.image-primary');
    targets.forEach(this.resetFocus);
  }

  resetFocus = (elem: any): void => {
    elem.style.removeProperty('position');
    elem.style.removeProperty('left');
    elem.style.removeProperty('top');
    elem.classList.remove('selected');
  }
}
