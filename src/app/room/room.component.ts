import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy {

  selfStream = navigator.mediaDevices.getUserMedia({
    audio: true,
    video: {
      aspectRatio: 16 / 9,
    },
  });
  roomId: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('roomId');
  }

  ngOnDestroy(): void {
    this.selfStream.then(stream => stream.getTracks().forEach(track => track.stop()));
  }
}
