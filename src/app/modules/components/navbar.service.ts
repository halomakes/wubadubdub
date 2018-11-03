import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  private visible = true;
  private opaque = false;

  public show = (): void => { this.visible = true; };
  public hide = (): void => { this.visible = false; };
  public makeTransparent = (): void => { this.opaque = false; };
  public makeOpaque = (): void => { this.opaque = true; };
  public isVisible = (): boolean => this.visible;
  public isOpaque = (): boolean => this.opaque;
}
