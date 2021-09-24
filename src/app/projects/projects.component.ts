import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(@Inject('PROJECTS') public projects: any[]) { }

  ngOnInit(): void {
  }

}
