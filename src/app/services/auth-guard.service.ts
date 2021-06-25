import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
     return this.auth.user.map.pipe(((user: any) => {
      if (user) return true
        // else
        this.router.navigate(['/login'])
        return false
    }))
  }

}
