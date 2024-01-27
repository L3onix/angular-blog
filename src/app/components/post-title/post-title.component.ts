import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-title',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './post-title.component.html',
  styleUrl: './post-title.component.css'
})
export class PostTitleComponent {
  @Input()
  author:string = ""
  @Input()
  date:string = ""
  @Input()
  img:string = ""
  @Input()
  title:string = ""

  faCircle = faCircle
}
