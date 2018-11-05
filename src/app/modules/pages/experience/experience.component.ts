import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experience } from './experience';
import { Education } from './education';
import { map } from 'rxjs/operators';

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
    forkJoin([this.loadEvents(), this.loadWork(), this.loadSchool()]);

  getOrderedEvents = (): Array<Experience | Education> =>
    this.getEventsToDisplay().sort(this.sortByDateDescending)

  private getEventsToDisplay = (): Array<Experience | Education> => {
    let base: Array<Experience | Education> = [];
    base = this.showWork ? base.concat(this.work) : base;
    base = this.showSchool ? base.concat(this.school) : base;
    base = this.showOther ? base.concat(this.events) : base;
    return base;
  }

  getMinimumDate = (): Date => this.getOrderedEvents()
    .sort(this.sortByDateAscending)[0].date

  sortByDateDescending = (a, b) => new Date(b.date).getDate() - new Date(a.date).getDate();
  sortByDateAscending = (a, b) => -this.sortByDateDescending(a, b);

  logThing = (): void => {
    const data = this.getOrderedEvents();
    console.log(data);
    console.log(this.getMinimumDate());
  }
}
