import { Challenge } from './../../domain/challenge';
import { ChallengeService } from './../../services/challenge.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  public challenges: Challenge[] = [];

  constructor(
    private challengeService: ChallengeService,
    private toast: ToastrService) { }

  ngOnInit() {
    this.challengeService.findAll().subscribe(
      res => this.challenges = res
    );
  }

  public createChallenge(challenge: Challenge) {
    console.log(challenge);
    this.challengeService.create(challenge).subscribe(
      res => this.challenges.push(res),
      error => {
        console.log(error);
        this.toast.error(
          '<i class="fas fa-times mr-2"></i> Error creating challenge', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-error alert-with-icon',
          positionClass: 'toast-bottom-center'
        });
      }
    );
  }

  public delete(challenge: Challenge) {
    this.challengeService.delete(challenge.id).subscribe(
      res => {
        this.toast.success(
          '<i class="fas fa-check mr-2"></i> Challenge deleted successfully', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-bottom-center'
        });
        const idx = this.challenges.findIndex(c => c.id === challenge.id);
        this.challenges.splice(idx, 1);
      },
      error => {
        this.toast.error(
          '<i class="fas fa-times mr-2"></i> Error deleting challenge', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-error alert-with-icon',
          positionClass: 'toast-bottom-center'
        });
      }
    );
  }
}
