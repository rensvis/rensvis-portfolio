import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: number;
  project: any;

  constructor(private route: ActivatedRoute, @Inject('PROJECTS') public projects: any[]) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.project = this.projects.find(p => p.id === this.id)
  }
}
