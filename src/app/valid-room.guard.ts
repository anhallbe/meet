import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomID } from './room-id';

@Injectable({
  providedIn: 'root'
})
export class ValidRoomGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const roomId = next.paramMap.get('roomId');
    try {
      RoomID.validate(roomId);
      return true;
    } catch (err) {
      alert(err.message);
      return this.router.createUrlTree(['/']);
    }
  }
}
