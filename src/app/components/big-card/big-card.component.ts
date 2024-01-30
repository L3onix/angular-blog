import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostTagComponent } from '../post-tag/post-tag.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [FontAwesomeModule, PostTagComponent, RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  faCircle = faCircle;
  @Input()
  id:number = 0;
  @Input()
  postAuthor:string = '';
  @Input()
  postDate:string = '';
  @Input()
  postImg:string = '';
  @Input()
  postSummary:string = '';
  @Input()
  postTags:string = '';
  @Input()
  postTitle:string = '';
}
