import { AuthService } from './user/auth.service';
import { Component, Inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ISession } from './session/session.model';
import { ToastrService } from 'ngx-toastr';
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
		private toastr: ToastrService,
		private vRef: ViewContainerRef ) { }


	ngOnInit() {
		this.toastr.success('Successfully launched testing app', 'lol!');
	}

	private searchSession(searchValue: string) {
		this.commentService.searchSessions(searchValue).subscribe(
			sessions => {
				this.foundSessions = sessions;
				console.log('foundSessions: ', this.foundSessions);
			}
		);
	}
}
