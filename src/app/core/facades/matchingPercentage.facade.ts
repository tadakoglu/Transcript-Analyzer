import { Injectable } from '@angular/core';
import MatchingPercentageState from '../states/mathingPercentage.state';

@Injectable({ providedIn: 'root' })
export default class MatchingPercentageFacade {
    public matchingPercentage$ = this._state.matchingPercentage$;
    public setMatchingPercentage = this._state.setMatchingPercentage.bind(this._state);

    constructor(private readonly _state: MatchingPercentageState) {
    }
}
