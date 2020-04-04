import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomID } from '../room-id';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  roomId = new FormControl('', [Validators.required, ({ value }) => {
    try {
      RoomID.validate(value);
      return null;
    } catch {
      return { invalidUUID: true };
    }
  }]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  join() {
    const roomId = this.roomId.value;
    this.router.navigate(['/room', roomId]);
  }

  create() {
    this.router.navigate(['/room', RoomID.generate()]);
  }

  getErrorMessage() {
    if (this.roomId.hasError('required')) {
      return 'You must enter a Room ID to join an existing room.';
    }
    if (this.roomId.hasError('invalidUUID')) {
      return 'Room ID is not valid.';
    }
  }
}
