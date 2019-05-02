import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ReinsCalculationService } from 'src/app/service/reins-calculation.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reins-calculation',
  templateUrl: './reins-calculation.component.html',
  styleUrls: ['./reins-calculation.component.css']
})
export class ReinsCalculationComponent implements OnInit {

  data: any;
  contractId = [];
  reinsCalculationForm: FormGroup;
  // reinsCaculation: ReinsCaculation;

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
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }

  getAndSetContractId() {
    // this.contractId = [
    //   { label: 'jhto2g2', value: 'chengshu' },
    //   { label: 'jhto2g2', value: 'yie' },
    // ]
    // console.log('length:' + this.contractId[0].label);
    this.contractId[0] = { label: 'jhto2g2', value: 'chengshu' };
    this.contractId[1] = { label: '123to223', value: 'chengshu' };
  }
}
