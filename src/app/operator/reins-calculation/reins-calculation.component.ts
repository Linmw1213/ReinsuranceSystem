import { Component, OnInit } from '@angular/core';
import { ReinsCalculationService } from 'src/app/service/reins-calculation.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContractService } from 'src/app/service/contract.service';

@Component({
  selector: 'app-reins-calculation',
  templateUrl: './reins-calculation.component.html',
  styleUrls: ['./reins-calculation.component.css']
})
export class ReinsCalculationComponent implements OnInit {

  resultData: any;
  originData: any;
  contractId = [];
  contract = [];
  reinsCalculationForm: FormGroup;
  surplus = false;
  quotaAshore = false;
  onChange = false;

  surplusData: any;
  quotaAshoreData: any;

  surplusRs: any;
  quotaAshoreRs: any;

  // reinsCaculation: ReinsCaculation;

  constructor(
    private service: ReinsCalculationService,
    private fb: FormBuilder,
    private contractService: ContractService) { }

  ngOnInit() {
    this.getAndSetContractId();
    // this.setResultData();
    // this.setOriginData();
    this.createForm();
  }

  createForm() {
    this.reinsCalculationForm = this.fb.group({
      contractId: ['', Validators.required],
      contractName: new FormControl({ value: '', disabled: true }),
      contractType: new FormControl({ value: '', disabled: true }),
      companyName: new FormControl({ value: '', disabled: true }),
    });
  }

  setOriginData() {
    this.originData = {
      datasets: [{
        data: [
          11,
          16,
          7,
          1,
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
        "总保额",
        "自留额",
        "保险费",
        "线数",
        "赔款"
      ]
    }
  }

  setResultData() {
    this.resultData = {
      labels: ['应付赔款', '保费'],
      datasets: [
        {
          label: '原保险公司',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59]
        },
        {
          label: '再保公司',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48]
        }
      ]
    }
  }

  getAndSetContractId() {
    this.contractService.getContractId().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.contractId[i] = { label: data[i], value: data[i] };
        }
      }
    );
  }

  // 选择合同编号
  contractIdOnChange() {

    const id = this.reinsCalculationForm.get('contractId').value;
    this.contractService.getBasicMsgById(id).subscribe(
      (data) => {
        console.log(data.contractName);
        this.reinsCalculationForm.get('contractName').setValue(data.contractName);
        this.reinsCalculationForm.get('companyName').setValue(data.companyName);
        this.reinsCalculationForm.get('contractType').setValue(data.contractTypeName);

        console.log('cal1:' + data.total);

        const typename = this.reinsCalculationForm.get('contractType').value;
        if (typename == '成数分保') {
          this.surplus = false;
          this.quotaAshore = true;

          this.quotaAshoreData = {
            datasets: [{
              data: [data.total, data.pay, data.insurance_expence, data.retention],
              backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB",],// "#36A2EB"
              label: '溢额再保险',
              hoverBackgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"]
            }],
            labels: ["总保额", "自留额", "保险费", "赔款"]// "线数"
          }

          this.quotaAshoreRs = {
            labels: ['应付赔款', '保费'],
            datasets: [
              {
                label: '原保险公司',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59]
              },
              {
                label: '再保公司',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48]
              }
            ]
          }

        } else if (typename == '溢额分保') {
          this.surplus = true;
          this.quotaAshore = false;

          this.surplusData = {
            datasets: [{
              data: [data.total, data.pay, data.insurance_expence, data.retention],
              backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB",],// "#36A2EB"
              label: '溢额再保险',
              hoverBackgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"]
            }],
            labels: ["总保额", "自留额", "保险费", "赔款"]// "线数"
          }

          this.surplusRs = {
            labels: ['应付赔款', '保费'],
            datasets: [
              {
                label: '原保险公司',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59]
              },
              {
                label: '再保公司',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48]
              }
            ]
          }

        } else {
          this.quotaAshore = false;
          this.surplus = false;
        }
      }
    );
  }

}
