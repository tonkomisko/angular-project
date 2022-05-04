import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';
// import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogComments } from '../interface/blog-comments';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../service/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: 'blog.html',
  styleUrls: ['./blog.css'],
})
export class BlogComponent implements OnInit {
  comments!: Comment[];
  inputComment: string = '';
  commentsData: any[] = JSON.parse(localStorage.getItem("comments") || "[]");
  blogComments: Observable<BlogComments[]>;
  // [] = JSON.parse(localStorage.getItem("comments") || "[]");

  readonly ROOT_URL = environment.ROOT_URL;
  


  // comment:string;
  setToStorage(){
    localStorage.setItem("comments", JSON.stringify(this.commentsData));
  }
  
  

  constructor(private http: HttpClient, public blogService: BlogService) {}

  ngOnInit(): void{
    this.getComments();
 
  }

  addComment() {
    // this.commentsData
    const currentDate = new Date();
    if (this.inputComment == '') {
      alert("You haven't entered a comment");
    } else {
      this.commentsData.push({
        id: this.commentsData.length + 1,
        content: this.inputComment,
        author: 'Janko Hrasko',
        dateTime: currentDate.toDateString() + ' at ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        status: 'read'
      })
      localStorage.setItem("comments", JSON.stringify(this.commentsData));
    }
    console.log(this.commentsData);
    this.inputComment = '';
  }

  // updateComment(index: number) {
  //   // debugger;
  //   // this.commentsData;
  //   if(this.commentsData[index].status == 'read'){
  //     this.commentsData[index].status = 'edit';
  //   }else {
  //     this.commentsData[index].status = 'read';
  //   }
  //   this.commentsData.splice(index,1,this.commentsData[index])
  //   localStorage.setItem("comments", JSON.stringify(this.commentsData));
  // }
 

  switchStatus(comment:any){
    debugger;
    if(comment.status == 'read'){
      comment.status = 'edit';
    }else {
      comment.status = 'read';
    }
  }

  // deleteComment(index: number) {
  //   confirm('Do you want to delete this comment?');
  //   this.commentsData.splice(index, 1);
  //   localStorage.setItem("comments", JSON.stringify(this.commentsData));
  // }

  getComments() {
    // this.blogComments = this.http.get(this.ROOT_URL)
    this.blogComments = this.http.get<BlogComments[]>(this.ROOT_URL)
   }



   comment:BlogComments;
   
   BlogComments: BlogComments[] = [];
   id1 = this.BlogComments;

  
  
   addCommentForm = new FormGroup({
    content: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
  });
  


  postComment() {
    const currentDate = new Date();
    this.comment = this.addCommentForm.value;
    this.blogService.postComment(this.comment).
    subscribe((response: any)=> {
      // console.log(response);
      this.BlogComments.push({

        content: response.content,
        author: response.author,
        dateTime: currentDate.toDateString() + ' at ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        status: 'read'

      })
      

      this.getComments();
     
    })
    // this.http.post(this.ROOT_URL, comment)
    
  }


  deleteComment(id1:string){
    // this.id1 = id
    debugger;
    this.blogService.deleteComment(id1)
    .subscribe({
      next: data => {
       console.log(data);
       this.getComments();
      },
      error: error =>{
        console.log(error)
      }

    });
    
      
      // (error: any)=> console.log(error)
      // ((error: any)=> console.log(error))       // console.log(response);
        
      // (response:any) => console.log(response),
      // (error: any) => console.log(error),
      // () => console.log('Done deleting user')
      
  
  
}

putComment(){
  
}

}

// https://www.angularjswiki.com/httpclient/post/