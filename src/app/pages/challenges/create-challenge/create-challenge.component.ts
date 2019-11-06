import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {

  public challengeForm: FormGroup;

  public gold = true;
  public silver = false;
  public bronze = false;

  constructor(fb: FormBuilder) {
    this.challengeForm = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.challengeForm.value);
  }
}
