import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private textColorSubject = new BehaviorSubject<string>('#ffffff');
  public textColor$ = this.textColorSubject.asObservable();

  private bgColorSubject = new BehaviorSubject<string>('#171717');
  public bgColor$ = this.bgColorSubject.asObservable();
  private bgDLbtnSubject = new BehaviorSubject<string>('#5692cd');
  public bgDLbtn$ = this.bgDLbtnSubject.asObservable();
  setTextColor(color: string): void {
    this.textColorSubject.next(color);
  }
  setBgColor(color: string): void {
    this.bgColorSubject.next(color);
  }
  setBgDLbtn(color: string): void {
    this.bgDLbtnSubject.next(color);
  }
}
