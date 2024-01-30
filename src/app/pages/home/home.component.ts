import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { TitleComponent } from '../../components/title/title.component';
import { data } from '../../data/fake.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BigCardComponent,
    NavBarComponent,
    TitleComponent,
    SmallCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts = data.posts
}
