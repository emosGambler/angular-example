import { AuthService } from './user/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import * as toastr from 'toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { };
  
  title = 'Angular test application';
  
  ngOnInit() {
    toastr.success('Successfully launched testing app');
  }
}
