import { Component } from '@angular/core';
import { PostTitleComponent } from '../../components/post-title/post-title.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { PostTagComponent } from '../../components/post-tag/post-tag.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NavBarComponent, PostTitleComponent, PostTagComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
