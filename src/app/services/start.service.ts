import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StartService {


  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  sendMessage(data: any) {
    return this.http.post(`${this.baseUrl}/api/recommend`, data);
  }
}



