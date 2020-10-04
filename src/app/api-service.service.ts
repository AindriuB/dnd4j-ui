import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './model/item';
import { Spell } from './model/spell';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  itemsUrl = environment.apiHost + '/items';
  spellsUrl = environment.apiHost + '/spells';

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

}
