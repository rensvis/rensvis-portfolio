import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  @Input() demoName: string;
  @Input() demoFolder: string;

  isOpen: boolean = false;
  path: string;

  constructor() {
  }

  ngOnInit(): void {
    document.onkeyup = e => this.keyPressHandler(e);
    this.path = '/assets/demos/' + this.demoFolder + '/index.html'
  }

  onShow() {
    this.isOpen = true;
  }

  toggleView() {
    this.isOpen = !this.isOpen;
    const body = document.getElementsByTagName("body")[0]
    if (this.isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }

  keyPressHandler(e: KeyboardEvent) {
    if (e.code === 'Escape' && this.isOpen) this.toggleView();
  }

  asideClickHandler() {
    if (!this.isOpen) this.toggleView()
  }
}
