//=============================================================================
// players.service.ts
//=============================================================================

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Player } from '../player.model'

@Injectable()
export class PlayersService {

    private _url: string = `${environment.apiUrl}/users/`

    constructor(private _http: HttpClient) { }

    public getPlayers(): Observable<Player[]> {
        let url: string = `${this._url}`;

        return this._http.get<Player[]>(url);
    }
}

