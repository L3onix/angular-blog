import { Component } from '@angular/core';
import { PostTitleComponent } from '../../components/post-title/post-title.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostTitleComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
