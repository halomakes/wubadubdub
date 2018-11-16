import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Graphic } from './graphic';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewChecked {
  @Input() images: Array<Graphic>;
  selectedImage: Graphic;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    // $('.img-holder').zoomTarget();
  }

  highlightImage = ($event: any) => {
    console.log($event);
    const pos: DOMRect = $event.target.getBoundingClientRect();
    $event.srcElement.style.position = 'fixed';
    $event.srcElement.style.left = `${pos.x}px`;
    $event.srcElement.style.top = `${pos.y}px`;
    $event.srcElement.classList.add('selected');
  }

  zoomTo = ($event) => {
    $($event.target).zoomTo();
  }
}
