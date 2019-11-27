import { Component, OnInit } from '@angular/core';
// import FormBuilder, FormGroup and Validators
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // declaring variables for use in validation
  messageForm: FormGroup;
  submitted = false;
  success = false;
  // specified URL format
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  // declaring private variable of type FormBuilder
  constructor(private formBuilder: FormBuilder) { }

  // lifecycle hook for angular
  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(this.reg)]],
    });
  }

  // called when entry is submitted
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }

}
