import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, scan, startWith, Subject } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { WebSocketService } from '../../services/web-socket.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-community-chat',
  imports: [CommonModule, FormsModule, DatePipe, RouterLink],
  templateUrl: './community-chat.component.html',
  styleUrl: './community-chat.component.css'
})

export class CommunityChatComponent {
  messages: Message[] = [
    { username: "Alice", text: "Hello, everyone!", date: new Date() },
    { username: "Bob", text: "How's it going?", date: new Date() }
];
  newMessage: string = '';
  isPostBoxOpen: boolean = false;

  constructor(private msgServ: MessageService, private wsServ: WebSocketService) { }

  ngOnInit() {
    this.msgServ.getMessages().subscribe({
      next: (data) => {
        console.log(data)
        this.messages = data;
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.wsServ.getMessage().subscribe({
      next: (data) => {
        this.messages.push(data);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  sendMessage(event : Event) {
    if (this.newMessage.trim()) {
      const msg = { username: 'You', text: this.newMessage, date: new Date() };

      this.wsServ.sendMessage(msg);

      this.msgServ.addMessage(msg).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.error(err);
        }
      });

      this.newMessage = '';
    }
  }

  togglePostBox() {
    this.isPostBoxOpen = !this.isPostBoxOpen;
  }
}

export interface Message {
  username: string,
  text: string,
  date: Date
}

