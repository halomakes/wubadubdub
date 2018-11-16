import { Component, OnInit, Input, AfterViewChecked, SimpleChanges, OnChanges } from '@angular/core';
import { Graphic } from './graphic';
import { DomSanitizer } from '@angular/platform-browser';
import { GraphicViewModel } from './graphic-viewmodel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {
  @Input() images: Array<Graphic>;
  model: Array<GraphicViewModel>;
  selectedImage: GraphicViewModel;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.images && changes.images.currentValue) {
      this.buildModel(changes.images.currentValue);
    }
  }

  buildModel = (input: Array<Graphic>): void => {
    this.model = input.sort(this.orderImages).map(this.createViewModel);
  }

  createViewModel = (src: Graphic): GraphicViewModel => {
    const result: GraphicViewModel = <GraphicViewModel>src;
    if (src.video) {
      result.videoBackgroundStyle = this.getVideoBackground(src.video);
      result.embedUrl = this.sanitizeUrl(this.getVideoUrl(src.video));
    }
    return result;
  }

  orderImages = (a: Graphic, b: Graphic) => a.sortOrder - b.sortOrder;

  sanitizeUrl = (url: string) => this.sanitizer.bypassSecurityTrustResourceUrl(url);

  getVideoUrl = (id: string) => `https://www.youtube.com/embed/${id}`;

  getThumbnailUrl = (id: string) => `http://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;

  getVideoBackground = (id: string) => <any>{
    'background-image': `url('${this.getThumbnailUrl(id)}')`
  }

  highlightImage = ($event: any, image: GraphicViewModel) => {
    this.selectedImage = image;
    const pos: DOMRect = $event.target.getBoundingClientRect();
    const maxSize = { x: 0.9 * window.innerWidth, y: 0.9 * window.innerHeight };
    const scales = [
      pos.width / maxSize.x,
      pos.height / maxSize.y
    ];
    const windowCenter = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const targetScale = Math.max(...scales);
    const targetOffset = { x: pos.x - windowCenter.x, y: pos.y - windowCenter.y };
    const scaledOffset = { x: targetOffset.x * targetScale, y: targetOffset.y * targetScale };
    console.log(scaledOffset);
    console.log(targetOffset);
    $event.srcElement.style.position = 'fixed';
    // $event.srcElement.style.transform = `translate(${targetOffset.x}px, ${targetOffset.y}px) scale(${targetScale})`;
    $event.srcElement.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    $event.srcElement.classList.add('selected');
  }

  exitSelection = () => {
    this.selectedImage = null;
    const targets = document.querySelectorAll('.image-primary');
    targets.forEach(this.resetFocus);
  }

  resetFocus = (elem: any): void => {
    elem.style.removeProperty('position');
    elem.style.removeProperty('transform');
    elem.classList.remove('selected');
  }
}
