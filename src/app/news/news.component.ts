import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../communication.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  description: string;
  title: string;
  messages: string[] = [];

  constructor(private communication: CommunicationService){}

  ngOnInit() {}

  sendMessage() {
    this.communication.sendMessage(this.description);
    this.description = '';
  }

}
