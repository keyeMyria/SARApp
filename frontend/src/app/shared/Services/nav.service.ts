import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  visible: boolean;
  home: boolean;
  constructor() { this.visible = false; this.home = false}

  hide() { this.visible = false; }
  show() { this.visible = true; }

  hideHome() { this.home = false; }
  showHome() { this.home = true; }
}
