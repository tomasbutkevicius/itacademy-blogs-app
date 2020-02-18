import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

class Post{
  title: string;
  content: string;
}


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() readMore = new EventEmitter<string>(); 
  @Output() commentsClick = new EventEmitter<string>();
  @Output() authorClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.readMore.emit('Clicked on read more');
    this.commentsClick.emit("Clicked on comments");
    this.authorClick.emit("Clicked on author");
  }

}
