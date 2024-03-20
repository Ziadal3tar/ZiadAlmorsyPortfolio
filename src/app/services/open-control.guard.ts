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

  // return httpClient.get<boolean>(`https://portfolio-1s6f0vegh-ziadal3tar.vercel.app/project/open/${password}`).pipe(
  //     map((response: any) => {
  //       console.log(response.open);

  //       if (response.open) {
          return true;
  //       } else {
  //         router.navigate(['/home']);
  //         return false;
  //       }
  //     })
  //   );
  }
