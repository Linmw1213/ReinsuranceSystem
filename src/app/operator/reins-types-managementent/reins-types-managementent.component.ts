import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reins-types-managementent',
  templateUrl: './reins-types-managementent.component.html',
  styleUrls: ['./reins-types-managementent.component.css']
})
export class ReinsTypesManagemententComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.data = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset'
      }],
      labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
      ]
    }
  }
}
