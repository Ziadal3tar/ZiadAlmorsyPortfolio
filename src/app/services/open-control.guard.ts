import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';
export const openControlGuard: CanActivateFn = (route, state) => {
  const httpClient = inject(HttpClient);
  const common = inject(CommonService);
  const router = inject(Router);
  const password = route.params['password'];

  return httpClient.get<boolean>(`http://localhost:3000/project/open/${password}`).pipe(
      map((response: any) => {
        if (response.open) {
          return true;
        } else {
          router.navigate(['/home']);
          return false;
        }
      })
    );
  }
