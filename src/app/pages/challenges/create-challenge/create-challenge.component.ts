import { CityService } from './../../../services/city.service';
import { City } from './../../../domain/city';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Challenge, UnitEnum } from '../../../domain/challenge';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {

  @Output() public submitChallenge = new EventEmitter<Challenge>();

  public cities: City[] = [];
  public city: City;

  public challengeForm: FormGroup;
  public duration: number;

  public unit: UnitEnum = UnitEnum.KM;
  public gold = true;
  public silver = false;
  public bronze = false;

  public file: File = null;

  constructor(
    fb: FormBuilder,
    private toast: ToastrService,
    private cityService: CityService) {
    this.challengeForm = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      description: ['', Validators.required],
      goal: ['', Validators.compose([Validators.required])],
      prizeLink: ['', Validators.required],
      prizeName: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cityService.findAll().subscribe(r => this.cities = r);
  }

  private getDifficulty() {
    if (this.gold) {
      return 'GOLD';
    } else if (this.silver) {
      return 'SILVER';
    } else {
      return 'BRONZE';
    }
  }

  onSubmit() {
    const formValue = this.challengeForm.value;
    const challenge = {
      name: formValue.name,
      description: formValue.description,
      duration: this.duration,
      prize: { name: formValue.prizeName, link: formValue.prizeLink },
      city: this.city,
      goal: formValue.goal,
      unit: this.unit,
      difficulty: this.getDifficulty()
    } as Challenge;
    this.submitChallenge.emit(challenge);
  }

  changeDuration(d: number) {
    this.duration = d;
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
