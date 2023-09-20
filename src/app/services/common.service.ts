import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  baseUrl: any = 'https://portfolio-1s6f0vegh-ziadal3tar.vercel.app/project';
  constructor(private _http: HttpClient) {}

  open(password: any) {
    return this._http.get(`${this.baseUrl}/open/${password}`);
  }
  sendEmail(data: any) {
    return this._http.post(`${this.baseUrl}/sendemail`,data);
  }
  addProject(data: any):any {
    return this._http.post(`${this.baseUrl}/addProject`,data);
  }
  updateProject(data: any,id:any):any {
    return this._http.put(`${this.baseUrl}/updateProject/${id}`,data);
  }
  getAllProjects():any {
    return this._http.get(`${this.baseUrl}/getAllProjects`);
  }
  deleteProject(id:any):any {
    return this._http.delete(`${this.baseUrl}/deleteProject/${id}`);
  }
}
