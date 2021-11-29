import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  public emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [Validators.required, Validators.email]);
  }

  public handleSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.emailField.value);
  }

}
