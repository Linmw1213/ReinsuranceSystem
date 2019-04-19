import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-reins-calculation',
  templateUrl: './reins-calculation.component.html',
  styleUrls: ['./reins-calculation.component.css']
})
export class ReinsCalculationComponent implements OnInit {

  data: any;
  contractId: SelectItem[];

  constructor() { }

  ngOnInit() {
    this.contractId = [
      { label: 'jhto2g2', value: 'chengshu' },
      { label: 'jhto2g2', value: 'yie' },
    ];
    this.setData();
  }

  setData() {
    this.data = {
      datasets: [{
        data: [
          10,
          7,
          5,
          3,
          8,
          4

        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#36A2EB",
          "#EEE9BF",
          "#56A2WE"
        ],
        label: 'My dataset'
      }],
      labels: [
        "总额",
        "自留额",
        "分保额",
        "赔款",
        "佣金",
        "风险单位"
      ]
    }
  }
}
