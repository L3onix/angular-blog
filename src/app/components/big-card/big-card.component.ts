import { Component } from '@angular/core';
import { PostTagComponent } from '../post-tag/post-tag.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [FontAwesomeModule, PostTagComponent],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  faCircle = faCircle;
}
