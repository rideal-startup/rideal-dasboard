import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-form',
  templateUrl: './line-form.component.html',
  styleUrls: ['./line-form.component.scss']
})
export class LineFormComponent implements OnInit {

  hexaColor:string = "#BC9166";

  constructor() { }

  ngOnInit() {
  }

}
