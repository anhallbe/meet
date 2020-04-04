import { Clipboard } from '@angular/cdk/clipboard';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RoomID } from './room-id';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private router: Router, private clipboard: Clipboard, private snackbar: MatSnackBar) { }

  create() {
    this.router.navigate(['/room', RoomID.generate()]);
  }

  join(roomId: string) {
    this.router.navigate(['/room', roomId]);
  }

  isInRoom(): boolean {
    return window.location.pathname.includes('/room/');
  }

  copyRoomLink() {
    if (!this.isInRoom()) {
      throw new Error('Room link can only be copied when in a room.');
    }
    const link = window.location.href;
    this.clipboard.copy(link);
    this.snackbar.open('Room link copied to clipboard!', 'OK', { duration: 5000 });
  }
}
