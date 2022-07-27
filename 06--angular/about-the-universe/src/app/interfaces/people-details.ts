import {People} from '../interfaces/people';

export interface PeopleDetails {
    count: number,
    next: null | string,
    previous: null | string,
    results: People[]
}