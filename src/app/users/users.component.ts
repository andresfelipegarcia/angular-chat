import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../communication.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  messages: string[] = [];

  constructor(private communication: CommunicationService){}

  ngOnInit() {
    this.communication.getMessages().subscribe((description: string) => {
        this.messages.push(description);
      });
  }
}
