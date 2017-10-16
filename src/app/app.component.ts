import { AuthService } from './user/auth.service';
import { Component, Inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager,  } from 'ng2-toastr/ng2-toastr';
import { ISession } from './session/session.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	private searchValue: string = '';
	private foundSessions: ISession[];

	constructor (
		private authService: AuthService,
		private toastr: ToastsManager,
		private vRef: ViewContainerRef ) { 
	this.toastr.setRootViewContainerRef(vRef);
}

	title = 'Angular test application';

	ngOnInit() {
		this.toastr.success('Successfully launched testing app');
	}

	private searchSession(searchValue: string) {

	}
}
