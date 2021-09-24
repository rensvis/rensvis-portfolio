import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  constructor(@Inject('SOCIALS') public socials: any[]) { }

  ngOnInit(): void {
  }

}
