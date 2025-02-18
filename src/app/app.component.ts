import { Component } from '@angular/core';
import { DiService } from './di.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private l:DiService)
  { this.l.log('started!');
  }
}
