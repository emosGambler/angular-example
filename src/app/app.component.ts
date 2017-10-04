import { AuthService } from './user/auth.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { };
  
  title = 'Angular test application';
  
  ngOnInit() {
    this.toastr.success('Successfully launched testing app');
  }
}
