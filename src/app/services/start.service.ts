import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StartService {

  private apiUrl = 'http://localhost:5286/api/recommend';

  constructor(private http: HttpClient) { }

  sendMessage(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}



