import { ISession } from './../../session/session.model';

export interface IComment {
    id: number,
    name: string,
    description: string,
    url: string,
    type: string,
    rate?: number,
    sessions: ISession[]
}