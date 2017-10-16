import { AuthService } from './user/auth.service';
import { Component, Inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ISession } from './session/session.model';
import { ToastsManager,  } from 'ng2-toastr/ng2-toastr';
import { CommentsService } from './comment/shared/comments.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	private foundSessions: ISession[];
	private searchValue: string = '';
	private title: string = 'Angular test application';

	constructor (
		private authService: AuthService,
		private commentService: CommentsService,
		private toastr: ToastsManager,
		private vRef: ViewContainerRef ) { 
	this.toastr.setRootViewContainerRef(vRef);
}


	ngOnInit() {
		this.toastr.success('Successfully launched testing app');
	}

	private searchSession(searchValue: string) {
		//TODO: fix it
		this.commentService.searchSessions(searchValue).subscribe(
			sessions => {
				this.foundSessions = sessions;
				console.log('sessions: ', sessions);
			}
		);
	}
}
