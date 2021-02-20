import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/tipos';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.endpoint);
  }

  saveUser(data: User) {
    return this.http.post(`${this.endpoint}controller/create.php`, JSON.stringify(data), {responseType: 'text'});
  }
}
