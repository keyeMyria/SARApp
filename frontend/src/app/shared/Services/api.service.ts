import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8000/api/auth';

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  register(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  verifyEmail(data) {
    return this.http.post(`${this.baseUrl}/user/verify/`,data);
  }

  sendPasswordResetLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }

  getUserData() {
    return this.http.get(`${this.baseUrl}/user`);
  }

  getProfile() {
    return this.http.get(`${this.baseUrl}/profile`);
  }
  
  update(data) {
    return this.http.post(`${this.baseUrl}/profile`, data);
  }

  empLogin(data) {
    return this.http.post(`${this.baseUrl}/employee/login`, data);
  }

  getEmployeeData() {
    return this.http.get(`${this.baseUrl}/employee`);
  }

  getEmployeeProfile() {
    return this.http.get(`${this.baseUrl}/employee/profile`);
  }
}