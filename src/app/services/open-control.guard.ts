import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CommonService } from './common.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const openControlGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const common = inject(CommonService);

  const password = route.params['password']; // ناخد الباسورد من الـ URL

  return common.open(password).pipe(
    map((response: any) => {
      console.log(response);

      if (response.open) {
        // ✅ الباسوورد صحيحة → نسمح بالدخول
        return true;
      } else {
        // ❌ الباسوورد غلط → نرجع للصفحة الرئيسية
        router.navigate(['/home']);
        return false;
      }
    }),
    catchError((err) => {
      console.error('Error checking password:', err);
      router.navigate(['/home']);
      return of(false);
    })
  );
};
