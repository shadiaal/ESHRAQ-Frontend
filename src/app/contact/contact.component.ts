
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  message: string = '';

  successMessage: string = '';
  errorMessage: string = '';

  send(form: any) {

    if (form.invalid) {
      this.errorMessage = 'تأكدي من صحة البيانات';
      this.successMessage = '';
      return;
    }

    this.successMessage = 'تم إرسال رسالتك بنجاح';
    this.errorMessage = '';

    this.name = '';
    this.email = '';
    this.message = '';
    form.resetForm();
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }
}
