import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: 'blog.html',
  styleUrls: ['./blog.css']
})
export class BlogComponent implements OnInit {

  comments! :Comment[];
  inputComment: string = '';
  // datepipe: DatePipe;
  currentDate = this.datepipe.transform((new Date), 'dd/MM/YYYY')
  currentTime = this.datepipe.transform((new Date), 'hh:mm:ss')


  commentsData =  [
    { content: 'this is a great blog post',
    author: 'Janko Hrasko',
    dateTime: this.currentDate +" at " + this.currentTime, },

    { content: 'I like this post',
    author: 'Janko Hrasko',
    dateTime: this.currentDate +" at " + this.currentTime,},

   
   ]

  constructor(public datepipe: DatePipe) { 
     }


  
  ngOnInit(): void {
        

  }

  addComment(){
    this.commentsData.push({
      content: this.inputComment,
      author: 'added by Janko Hrasko',
      dateTime: this.currentDate +" at " + this.currentTime,
    });

    this.inputComment = '';
    
  }

}

