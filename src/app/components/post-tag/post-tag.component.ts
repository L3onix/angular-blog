import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-tag',
  standalone: true,
  imports: [],
  templateUrl: './post-tag.component.html',
  styleUrl: './post-tag.component.css'
})
export class PostTagComponent {
  @Input()
  tagName = ''

  getColor(): string {
    return ""
  }

  getBackgroundColor(): string {
    return ""
  }
}
