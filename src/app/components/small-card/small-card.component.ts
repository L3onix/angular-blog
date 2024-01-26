import { Component, Input } from '@angular/core';
import { PostTagComponent } from '../post-tag/post-tag.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [PostTagComponent, FontAwesomeModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  faCircle = faCircle
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
