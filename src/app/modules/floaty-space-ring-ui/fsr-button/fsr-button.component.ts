import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fsr-button',
  templateUrl: './fsr-button.component.html',
  styleUrls: ['./fsr-button.component.scss']
})
export class FsrButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('size') size: string;
}
