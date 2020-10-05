import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './model/item';
import { Spell } from './model/spell';
import { environment } from './../environments/environment';
import { Stats } from './model/stats';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  itemsUrl = environment.apiHost + '/items';
  spellsUrl = environment.apiHost + '/spells';
  statsUrl = environment.apiHost + '/stats';

  httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  getItems() {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getSpells() {
    return this.http.get<Spell[]>(this.spellsUrl);
  }

  getStats() {
    return this.http.get<Stats>(this.statsUrl);
  }

}
