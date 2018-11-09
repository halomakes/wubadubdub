import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experience } from '../../components/timeline/experience';
import { Education } from '../../components/timeline/education';
import { map } from 'rxjs/operators';
import { TimelineViewModel } from '../../components/timeline/timeline-viewmodel';
import { NavbarService } from '../../components/navbar.service';

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
  displayedEvents: Array<Experience | Education>;

  constructor(private http: HttpClient, public navbar: NavbarService) { }

  ngOnInit() {
    this.navbar.makeOpaque();
    this.loadAllData().subscribe(r => {
      this.updateDisplayedEvents();
      this.hasLoaded = true;
    });
  }

  private updateDisplayedEvents = (): void => { this.displayedEvents = this.getEventsToDisplay(); };

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

  private getEventsToDisplay = (): Array<Experience | Education> => {
    let base: Array<Experience | Education> = [];
    base = this.showWork ? base.concat(this.work) : base;
    base = this.showSchool ? base.concat(this.school) : base;
    base = this.showOther ? base.concat(this.events) : base;
    return base;
  }

  toggleSchool = (): void => { this.showSchool = !this.showSchool; this.updateDisplayedEvents(); };
  toggleWork = (): void => { this.showWork = !this.showWork; this.updateDisplayedEvents(); };
  toggleOther = (): void => { this.showOther = !this.showOther; this.updateDisplayedEvents(); };
}
