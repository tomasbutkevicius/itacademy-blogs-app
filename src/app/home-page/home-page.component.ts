import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  post: object;
  constructor() { }

  ngOnInit(): void {
    this.post ={
      title: "My new post",
      content: "Good day"
    }
  }

  public handleReadMore(text: string){
    console.log(text);
  }
  public handleCommentsClick(text: string){
    console.log(text);
  }
  public handleAuthorClick(text: string){
    console.log(text);
  }

}
