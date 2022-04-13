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
  isEditable:boolean=false;
  id: number;

  liCommnets = document.getElementsByClassName('li-comment');
  updateButton = document.getElementsByClassName('update-button btn btn-info');
  saveButton = document.getElementsByClassName('save-button btn btn-info');


  commentsData =  [
    { 
      id: null,
    content: 'this is a great blog post',
    author: 'Janko Hrasko',
    dateTime: this.currentDate +" at " + this.currentTime, }

     
   ]


   
  constructor(public datepipe: DatePipe) { 

   
     }


  
  ngOnInit(): void {
        

  }

  

  addComment(){
    
    if(this.inputComment == ''){
      alert("You haven't entered a comment")
    }
    else {
      this.commentsData.push({
        id: this.id,
      content: this.inputComment,
      author: 'added by Janko Hrasko',
      dateTime: this.currentDate +" at " + this.currentTime,
      
    });
  }
    console.log(this.commentsData);
    this.inputComment = '';
    
  }

  updateComment(index: number){
   
    this.liCommnets[index].setAttribute('contenteditable', 'true')
    this.liCommnets[index].classList.add('background-blue');

    this.saveButton[index].classList.add('shown')
    this.saveButton[index].classList.remove('hidden')

    this.updateButton[index].classList.remove('shown');
    this.updateButton[index].classList.add('hidden');
 
  
  }

  saveComment(index:number){

        let updatedContent = this.liCommnets[index].firstChild.parentElement.textContent;

    this.liCommnets[index].setAttribute('contenteditable', 'false')
    this.liCommnets[index].classList.remove('background-blue');
    this.saveButton[index].classList.remove('shown')
    this.saveButton[index].classList.add('hidden')

  
    this.commentsData[index].content = updatedContent;
    this.updateButton[index].classList.add('shown');
    this.updateButton[index].classList.remove('hidden');


  }

  deleteComment(index: number) {
    confirm("Do you want to delete this comment?")
    this.commentsData.splice(index,1)
  
   
  }

}

