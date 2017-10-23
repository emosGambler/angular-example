import { AuthService } from './user/auth.service';
import { Component, Inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager,  } from 'ng2-toastr/ng2-toastr';
import * as roling from 'roling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastsManager,
    private vRef: ViewContainerRef
  ) { 
    this.toastr.setRootViewContainerRef(vRef);
  }
  
  title = 'Angular test application';
  
  ngOnInit() {
    this.toastr.success('Successfully launched testing app');
    roling.print();
  }
}
