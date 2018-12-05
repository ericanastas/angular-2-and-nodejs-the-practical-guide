import { Component } from '@angular/core';
import { allResolved } from 'q';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  onAddPost() {
    alert('Post Added!');
  }
}
