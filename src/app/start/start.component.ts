import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartService } from '../services/start.service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  text = '';

  messages: { text: string, type: 'ai' | 'user' }[] = [];

  isTyping = false;

  constructor(private service: StartService) { }

  ngOnInit() {
    //  بداية المحادثة من الذكاء
    this.sendMessage('');
  }

  send() {
    if (!this.text.trim()) return;

    this.messages.push({
      text: this.text,
      type: 'user'
    });

    const input = this.text;
    this.text = '';

    this.sendMessage(input);
  }

  sendMessage(input: string) {

    this.isTyping = true;

    this.service.sendMessage({ text: input })
      .subscribe((res: any) => {

        this.isTyping = false;

        this.messages.push({
          text: res.message,
          type: 'ai'
        });

      });
  }
}
