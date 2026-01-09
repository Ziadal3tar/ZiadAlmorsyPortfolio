import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  baseUrl: any = 'https://be-portfolio-zeta.vercel.app/project';
  // baseUrl4EV: any = 'https://be-portfolio-zeta.vercel.app';
  // baseUrl: any = 'http://localhost:3000/project';
  // baseUrl4EV: any = 'http://localhost:3000/EV';
  constructor(private _http: HttpClient) {}

private projectsSubject = new BehaviorSubject<any[]>([]);
projects$ = this.projectsSubject.asObservable();

loadProjects(): Observable<any[]> {

  // 🟢 لو الداتا موجودة في الذاكرة
  if (this.projectsSubject.value.length) {
    console.log('FROM CACHE', this.projectsSubject.value);
    return this.projects$;
  }

  // 🔵 أول مرة فقط
  return this.getAllProjects().pipe(
    tap((res: any) => {
      console.log('FROM API', res.projects);
      this.projectsSubject.next(res.projects);
    }),
    map((res: any) => res.projects) // 👈 دايمًا Array
  );
}

getProjectById(id: string) {
  return this.projectsSubject.value.find(p => p._id === id);
}
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
