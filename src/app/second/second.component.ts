import { Component } from '@angular/core';
import { DiService } from '../di.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  // user = { name: '', email: '' }; 
  // users: any[] = []; //ARRAY

  // constructor() {}

 
  // addUser() {
  //   if (this.user.name.trim() && this.user.email.trim()) {
  //     const newUser = { 
  //       id: this.users.length + 1, 
  //       name: this.user.name, 
  //       email: this.user.email 
  //     };
  //     this.users.push(newUser); // Add user to array
  //     this.user = { name: '', email: '' }; 
  //   }
  // }


  // deleteUser(userId: number) {
  //   this.users = this.users.filter(user => user.id !== userId);
  // }
  isvisible = false;
  display(){
    this.isvisible = !this.isvisible;
  }

  

}
