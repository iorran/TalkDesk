import { map } from 'rxjs/operators';
import { App } from './../../../shared/models/app.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  constructor(private _httpClient: HttpClient) { }

  public findAll(): Observable<Array<App>> {
    return this._httpClient.get<Array<App>>("./assets/apps.json");
}
}
