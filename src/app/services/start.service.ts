import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StartService {

  /*  private apiUrl = 'http://localhost:5286/api/recommend';*/
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //sendMessage(data: any) {
  //  return this.http.post(this.apiUrl, data);
  //}
  sendMessage(data: any) {
    return this.http.post(`${this.baseUrl}/api/recommend`, data);
  }
}



