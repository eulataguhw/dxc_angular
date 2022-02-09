import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userInfo = this.tokenStorageService.getUser();
      console.log('test: ' + userInfo.roles[0] );
      if (userInfo.roles.includes('ROLE_USER')) {
        this.router.navigate(['unauthorized']);
        return false;
      }
    return true;
  }
  
}
