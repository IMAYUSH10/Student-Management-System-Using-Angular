import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  user = { name: '', email: '' }; 
  users: any[] = []; //ARRAY

  constructor() {}
  addUser() {
    if (this.user.name.trim() && this.user.email.trim()) {
      const newUser = { 
        id: this.users.length + 1, 
        name: this.user.name, 
        email: this.user.email 
      };
      this.users.push(newUser); // Add user to array
      this.user = { name: '', email: '' }; 
    }
  }


  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}

 
  
