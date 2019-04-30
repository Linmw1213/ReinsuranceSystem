import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ReinsCalculationService } from 'src/app/service/reins-calculation.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReinsCaculation } from 'src/app/VO/reinsCaculation';

@Component({
  selector: 'app-reins-calculation',
  templateUrl: './reins-calculation.component.html',
  styleUrls: ['./reins-calculation.component.css']
})
export class ReinsCalculationComponent implements OnInit {

  data: any;
  contractId: SelectItem[];
  reinsCalculationForm: FormGroup;
  reinsCaculation: ReinsCaculation;

  constructor(private service: ReinsCalculationService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAndSetContractId();
    this.setData();
    this.createForm();
  }

  createForm() {
    this.reinsCalculationForm = this.fb.group({
      contractId: '',
      contractName: '',
      contractType: '',
      companyName: ''
    });
  }

  setData() {
    this.data = {
      datasets: [{
        data: [
          5,
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

  getAndSetContractId() {
    this.contractId = [
      { label: 'jhto2g2', value: 'chengshu' },
      { label: 'jhto2g2', value: 'yie' },
    ]
    // this.contractId[0] = { label: 'jhto2g2', value: 'chengshu' };
  }
}
