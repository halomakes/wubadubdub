import { Component, OnInit, Input } from '@angular/core';
import { TimelineViewModel } from './timeline-viewmodel';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() events: TimelineViewModel;

  constructor() { }

  ngOnInit() {
  }

}
