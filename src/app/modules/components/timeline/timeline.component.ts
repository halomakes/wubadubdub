import { Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { TimelineViewModel } from './timeline-viewmodel';
import { Education } from './education';
import { Experience } from './experience';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnChanges {
  @Input() events: Array<Experience | Education>;
  loadedEvents: Array<Experience | Education>;
  model: Array<TimelineViewModel> = new Array<TimelineViewModel>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadedEvents = changes.events.currentValue;
    this.model = this.getViewModel();
  }

  getViewModel = (): Array<TimelineViewModel> => {
    const result: Array<TimelineViewModel> = [];
    const minDate = this.getMinimumDate();
    const currentDate = new Date(minDate.getFullYear(), minDate.getMonth() - 1, 1);
    const maxDate = this.getMaximumDate();
    maxDate.setMonth(maxDate.getMonth() + 1);
    const allEvents = this.loadedEvents;
    while (currentDate < maxDate) {
      const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
      const events = allEvents.filter(e => new Date(e.date) > currentDate && new Date(e.date) <= nextDate);
      if (events.length) {
        result.push(<TimelineViewModel>{
          startDate: new Date(currentDate),
          heading: this.getIndicator(currentDate),
          experience: events
        });
      } else if (currentDate.getMonth() === 0) {
        result.push(this.getBlankMarker(currentDate));
      }
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    if (result.length) {
      result.push(<TimelineViewModel>{
        startDate: new Date(),
        heading: 'Now'
      });
      result.reverse();
      const last = result[result.length - 1];
      if (last.startDate.getMonth() !== 0) {
        result.push(<TimelineViewModel>{
          startDate: last.startDate,
          heading: last.startDate.getFullYear().toString()
        });
      }
    }
    return result;
  }

  private getDatesAsNumbers = (): Array<number> => this.events
    .map(e => new Date(e.date).getTime())

  private getMinimumDate = (): Date => new Date(Math.min.apply(null, this.getDatesAsNumbers()));

  private getMaximumDate = (): Date => new Date(Math.max.apply(null, this.getDatesAsNumbers()));

  private sortByDateDescending = (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate();

  private getBlankMarker = (currentDate: Date): TimelineViewModel => <TimelineViewModel>{
    startDate: currentDate,
    heading: currentDate.getFullYear().toString()
  }

  private getIndicator = (date: Date): string => date.getMonth() === 0 ? date.getFullYear().toString() : monthNames[date.getMonth()];
}
