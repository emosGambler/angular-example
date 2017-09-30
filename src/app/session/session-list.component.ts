import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from './../comment/shared/comment.model';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
    @Input() filterBy: string;
    @Input() sessions: ISession[];
    private filteredSessions: ISession[];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter): void {
        if (filter === 'all') {
            this.filteredSessions = this.sessions.slice(0);
        } else {
            this.filteredSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
            console.log('filteredSessions: ', this.filteredSessions)
        }
    }
}