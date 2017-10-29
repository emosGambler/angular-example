import { Injectable } from '@angular/core';
import { ISession } from './session.model';

@Injectable()
export class VoterService {
    addVoter(session: ISession, voterName): void {
        session.voters.push(voterName);
    }

    deleteVoter(session: ISession, voterName): void {
        session.voters.splice(session.voters.indexOf(voterName), 1);
    }

    hasVoted(session: ISession, voterName): boolean {
        return session.voters.some(voter => voter === voterName);
    }
}