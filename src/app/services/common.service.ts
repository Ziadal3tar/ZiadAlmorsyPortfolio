import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  baseUrl: any = 'https://be-portfolio-zeta.vercel.app/project';
  // baseUrl4EV: any = 'https://be-portfolio-zeta.vercel.app';
  // baseUrl: any = 'http://localhost:3000/project';
  // baseUrl4EV: any = 'http://localhost:3000/EV';
  constructor(private _http: HttpClient) {}

  // ✅ فتح الصفحة بكلمة مرور
  open(password: string): Observable<any> {
    return this._http.get(`${this.baseUrl}/open/${password}`);
  }

  // ✅ إرسال بريد إلكتروني
  sendEmail(data: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/sendemail`, data);
  }

  // ✅ إضافة مشروع جديد
  addProject(data: FormData): Observable<any> {
    return this._http.post(`${this.baseUrl}/addProject`, data);
  }

  // ✅ تحديث مشروع
  updateProject(id: string, data: FormData): Observable<any> {
    return this._http.put(`${this.baseUrl}/updateProject/${id}`, data);
  }

  // ✅ جلب كل المشاريع
  getAllProjects(): Observable<any> {
    return this._http.get(`${this.baseUrl}/getAllProjects`);
  }

  // ✅ حذف مشروع
  deleteProject(id: string): Observable<any> {
    return this._http.delete(`${this.baseUrl}/deleteProject/${id}`);
  }

  // ✅ حذف صورة واحدة من المشروع
  deleteImage(data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/deleteImg`, data);
  }

  // ✅ استبدال صورة داخل المشروع
  replaceImage(data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/replaceImg`, data);
  }
}
