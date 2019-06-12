import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../communication.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  messages: string[] = [];
  color: string;

  constructor(private communication: CommunicationService){}

  ngOnInit() {
    this.communication.getMessages().subscribe((description: string) => {
        this.messages.push(description);
    });
  }
}
