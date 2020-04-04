import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { RoomComponent } from './room/room.component';
import { ValidRoomGuard } from './valid-room.guard';


const routes: Routes = [
  {
    path: '',
    component: LobbyComponent,
  },
  {
    path: 'room/:roomId',
    canActivate: [ValidRoomGuard],
    component: RoomComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
