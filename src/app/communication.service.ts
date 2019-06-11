import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(description) {
    this.socket.emit('new-message', description);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (description) => {
        observer.next(description);
      });
    });
  }
}
