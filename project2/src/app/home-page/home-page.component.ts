import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home-page.html',
  styles: [
    `
    .home-page2 {
      width: 50%;
      margin: 0 auto;
      padding: 2rem;
    }

    .success {
      display: block;
      background-color: green
    }

    .danger {
      display: none;
    }

    `
  ]
})
export class HomePageComponent implements OnInit {
  // @Output() newItemEvent = new EventEmitter<boolean>();
  loginName: string = '';
  loginPassword: string = '';
  isLoggedIn_child: boolean = false;

  constructor(private http:HttpClient, private ds: DataService ) { }

  ngOnInit(): void {
  }
  status:boolean = true;

  showHideHome(){
    this.status = !this.status;
  }

  
  getUsers(){
    debugger;
    const url = `http://localhost:3000/users?user=${this.loginName}&password=${this.loginPassword}`
    return this.http.get<any>(url);
      // .map(res =>res.json())

  }


  users: any;

  showUsers(){
    // debugger;
    this.getUsers().subscribe((data: any) =>  {
      debugger;
      this.users = data;
      console.log(data);
      console.log("users" + this.users);
      if (data.length > 0){
        this.isLoggedIn_child = true
      }else {
        this.isLoggedIn_child = false
      }
      // this.newItemEvent.emit(this.isLoggedIn_child);
      
        this.ds.sendData(this.isLoggedIn_child);
      

  })
}
}



  
  // redirectToPage() {
  //   this.isShown = ! this.isShown;
  //   console.log("clicked me")
    
  // }



