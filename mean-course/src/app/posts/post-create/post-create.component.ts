import { Component } from '@angular/core';
import { allResolved } from 'q';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  newPost = '';

  enteredValue = '';

  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
