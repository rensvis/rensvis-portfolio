import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
  ]
})
export class AppComponent {
  title = 'rensvis-portfolio';


  onActivate(event: Event) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
    // ORIGINAL, NOT WORKING
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
