import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from './../session/session.model';
import { AuthService } from './../user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
    @Input() filterBy: string;
    @Input() sessions: ISession[];
    @Input() sortBy: string;
    private filteredSessions: ISession[];

    constructor (private authService: AuthService,
        private voterService: VoterService
    ) { }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? 
                this.filteredSessions.sort(sortByNameAscending) :
                this.filteredSessions.sort(sortByVotesDescending)
        }
    }

    toggleVote(session: ISession) {
        if (this.hasVoted(session)) {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.authService.currentUser.userName);
        }

        if (this.sortBy === 'voters') {
            this.filteredSessions.sort(sortByVotesDescending);
        }
    }

    hasVoted(session: ISession): boolean {
        return this.voterService.hasVoted(session, this.authService.currentUser.userName);
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