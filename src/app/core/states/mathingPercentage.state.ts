import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export default class MatchingPercentageState {
    private readonly _matchingPercentage$ = new BehaviorSubject<number>(50);
    public matchingPercentage$ = this._matchingPercentage$.asObservable();

    constructor(
    ) {

    }


    public setMatchingPercentage(value: number | string): void {
        this._matchingPercentage$.next(parseInt(`${value}`));
        console.log('Matching %', value);
    }
}
