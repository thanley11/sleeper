//=============================================================================
// players.service.ts
//=============================================================================

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Player } from '../player.model'
import { Message } from '../message.model';

@Injectable()
export class PlayersService {

    private _url: string = `${environment.apiUrl}`
    private _giphyUrl: string = 'http://api.giphy.com/v1/gifs/search?api_key=Awq5410QQl0416nJogqlsinldM2s9PCA&q='

    constructor(private _http: HttpClient) { }

    public getPlayers(): Observable<Player[]> {
        let url: string = `${this._url}/users/`;

        return this._http.get<Player[]>(url);
    }

    public getMessages(): Observable<Message[]> {
        let url: string = `${this._url}/messages/`;

        return this._http.get<Message[]>(url);
    }

    public addMessage(msg: Message): Observable<Message> {
        let url: string = `${this._url}/messages/`;

        return this._http.put<Message>(url, msg);
    }

    public addGif(msg: Message): Observable<any> {

        var apiLink = this._giphyUrl + msg.msg.trim();
        return this._http.get<any>(apiLink);

    }
     
}

