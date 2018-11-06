import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experience } from './experience';
import { Education } from './education';
import { map } from 'rxjs/operators';
import { TimelineViewModel } from './timeline-viewmodel';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  private events: Array<Experience>;
  private work: Array<Experience>;
  private school: Array<Education>;
  private baseUrl = 'assets/data/experience/';

  showWork = true;
  showSchool = true;
  showOther = true;

  hasLoaded = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadAllData().subscribe(r => this.hasLoaded = true);
  }

  private loadEvents = (): Observable<Experience[]> =>
    this.http.get<Experience[]>(`${this.baseUrl}events.json`)
      .pipe(map(r => this.events = r))

  private loadWork = (): Observable<Experience[]> =>
    this.http.get<Experience[]>(`${this.baseUrl}work.json`)
      .pipe(map(r => this.work = r))

  private loadSchool = (): Observable<Education[]> =>
    this.http.get<Education[]>(`${this.baseUrl}school.json`)
      .pipe(map(r => this.school = r))

  private loadAllData = () =>
    forkJoin([this.loadEvents(), this.loadWork(), this.loadSchool()])

  getOrderedEvents = (): Array<Experience | Education> =>
    this.getEventsToDisplay().sort(this.sortByDateDescending)

  private getEventsToDisplay = (): Array<Experience | Education> => {
    let base: Array<Experience | Education> = [];
    base = this.showWork ? base.concat(this.work) : base;
    base = this.showSchool ? base.concat(this.school) : base;
    base = this.showOther ? base.concat(this.events) : base;
    return base;
  }

  getViewModel = (): Array<TimelineViewModel> => {
    const result: Array<TimelineViewModel> = [];
    const minDate = this.getMinimumDate();
    const currentDate = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    const maxDate = this.getMaximumDate();
    maxDate.setMonth(maxDate.getMonth() + 1);
    let prevDate = currentDate;
    prevDate.setMonth(currentDate.getMonth() - 1);
    while (currentDate < maxDate) {
      const events = this.getEventsToDisplay().filter(e => new Date(e.date) > prevDate && new Date(e.date) <= currentDate);
      if (events.length) {
        result.push(<TimelineViewModel>{
          startDate: currentDate,
          heading: this.getIndicator(currentDate),
          experience: events
        });
      } else if (currentDate.getMonth() === 0) {
        result.push(this.getBlankMarker(currentDate));
      }
      prevDate = new Date(currentDate);
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    if (result.length) {
      result.push(<TimelineViewModel>{
        startDate: new Date(),
        heading: 'Now'
      });
      result.reverse();
      const last = result[result.length - 2];
      result.push(<TimelineViewModel>{
        startDate: last.startDate,
        heading: last.startDate.getFullYear().toString()
      });
    }
    return result;
  }

  getMinimumDate = (): Date => new Date(this.getEventsToDisplay()
    .sort(this.sortByDateAscending)[0].date)

  getMaximumDate = (): Date => new Date(this.getEventsToDisplay()
    .sort(this.sortByDateDescending)[0].date)

  sortByDateDescending = (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate();
  sortByDateAscending = (a, b) => -this.sortByDateDescending(a, b);

  private getBlankMarker = (currentDate: Date): TimelineViewModel => <TimelineViewModel>{
    startDate: currentDate,
    heading: currentDate.getFullYear().toString()
  }

  private getIndicator = (date: Date): string => date.getMonth() === 0 ? date.getFullYear().toString() : monthNames[date.getMonth()];

}
