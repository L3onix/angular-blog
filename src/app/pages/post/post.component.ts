import { Component } from '@angular/core';
import { PostTitleComponent } from '../../components/post-title/post-title.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { PostTagComponent } from '../../components/post-tag/post-tag.component';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/fake.data';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NavBarComponent, PostTitleComponent, PostTagComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  private id:number = 0;
  author:string = '';
  date:string = '';
  img:string = '';
  text:string = '';
  title:string = '';

  constructor (
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = Number(value.get('id'));
    })
    this.loadPageContent();
  }

  private loadPageContent(): void {
    const post = this.findPost();
    console.log(post );
    this.author = post.author;
    this.date = post.date;
    this.img = post.img;
    this.text = post.text;
    this.title = post.title;
  }

  private findPost() {
    return data.posts.filter(post => post.id == this.id)[0];
  }
}
