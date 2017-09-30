import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from './../comment/shared/comment.model';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
    @Input() filterBy: string;
    @Input() sessions: ISession[];
    @Input() sortBy: string;
    private filteredSessions: ISession[];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? 
                this.filteredSessions.sort(sortByNameAscending) :
                this.filteredSessions.sort(sortByVotesDescending)
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

function sortByNameAscending (s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) return 1;
    if (s1.name === s2.name) return 0;
    return -1;
}

function sortByVotesDescending (s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
}