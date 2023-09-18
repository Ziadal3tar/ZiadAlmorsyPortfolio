import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private _common: CommonService) {}
  senderForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  });
  emailError: any;
  loading: Boolean = false;
  send(data: any) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (data.email === '') {
      this.emailError = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
      this.emailError = 'Invalid email format';
    } else {
      this.loading = !this.loading
      this.emailError = '';
      this._common.sendEmail(data).subscribe((data: any) => {
        if (data.message == 'sended') {
          this.senderForm.reset()
          this.loading = !this.loading

        }
      });
    }
  }
}
