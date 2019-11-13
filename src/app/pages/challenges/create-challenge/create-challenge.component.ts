import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  public file: File = null;

  constructor(
    fb: FormBuilder,
    private toast: ToastrService) {
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

  handleFileInput(files: FileList) {
    const file = files.item(0);
    const ext = file.name.split('.')[1];
    if (ext !== 'json') {
      this.toast.error(
        '<i class="fas fa-times mr-2"></i> Only JSON files are accepted', '', {
        disableTimeOut: true,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-error alert-with-icon',
        positionClass: 'toast-bottom-center'
      });
    } else {
      this.file = files.item(0);
    }
  }
}
