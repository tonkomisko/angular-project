import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  loginName: string = '';
  loginPassword: string = '';

  constructor(private http:HttpClient) { }

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
  }


  users: any;

  showUsers(){
    // debugger;
    this.getUsers().subscribe((data: any) =>  {
      debugger;
      this.users = data;
      console.log(data);
      console.log("users" + this.users);
      

  })
}
}



  
  // redirectToPage() {
  //   this.isShown = ! this.isShown;
  //   console.log("clicked me")
    
  // }



