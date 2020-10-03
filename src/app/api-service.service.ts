import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './model/item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  itemsUrl = "http://localhost:8080/items";

  httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  getItems() {
    return this.http.get<Item[]>(this.itemsUrl);
  }


}
