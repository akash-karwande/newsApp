import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }


  getBitcoin() {
  	return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-12&sortBy=publishedAt&apiKey=c39f8206f6f248e59ed86accffc8f9e3')
  }

  
}
