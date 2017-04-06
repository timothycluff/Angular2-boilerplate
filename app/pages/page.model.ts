/**
 * Created by tim.cluff on 4/6/2017.
 */

export interface IPage {
    id: number;
    name: string;
    title: string;
    sessions: ISession[];
}

export interface ISession {
    id: number;
    name: string;
    title: string;
    abstract: string;
}
