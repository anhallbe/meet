import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RoomID } from '../room-id';
import { RoomService } from '../room.service';

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

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
  }

  join() {
    const roomId = this.roomId.value;
    this.roomService.join(roomId);
  }

  create() {
    this.roomService.create();
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
