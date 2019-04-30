import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { ReinsClaim } from 'src/app/VO/reinsClaim';
import { ReinsClaimService } from 'src/app/service/reins-claim.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reins-claim-management',
  templateUrl: './reins-claim-management.component.html',
  styleUrls: ['./reins-claim-management.component.css']
})
export class ReinsClaimManagementComponent implements OnInit {

  data: any;
  items: MenuItem[];
  reinsClaimArr: ReinsClaim[];
  cols: any[];
  reinsClaimForm: FormGroup;
  contractId: SelectItem[];

  constructor(private service: ReinsClaimService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.setChartData();
    this.setSteps();
    this.getAll();
    this.setCols();
    this.setContractId();
  }

  createForm() {
    this.reinsClaimForm = this.fb.group({
      contractId: ['', Validators.required],
      claimId: new FormControl({ value: '', disabled: true }),
      contractName: new FormControl({ value: '', disabled: true }),
      contractType: new FormControl({ value: '', disabled: true }),
      companyName: new FormControl({ value: '', disabled: true }),
      bankAccount: new FormControl({ value: '', disabled: true }),
      bankName: new FormControl({ value: '', disabled: true }),
      currency: new FormControl({ value: '', disabled: true }),
      claimAmount: new FormControl({ value: '', disabled: true }),
    })
  }

  getAll() {
    this.service.getAll().subscribe(
      (data) => {
        this.reinsClaimArr = data;
        console.log(data);
      }
    );
  }

  delete(event: Event, rowData: ReinsClaim) {
    this.reinsClaimArr = this.reinsClaimArr.filter(reinsClaim => reinsClaim !== rowData);
  }

  setCols() {
    this.cols = [
      { field: 'claimId', header: '理赔号' },
      { field: 'contractId', header: '合同编号' },
      { field: 'contractName', header: '合同名称' },
      { field: 'contractType', header: '合同类型' },
      { field: 'companyName', header: '再保公司' },
      { field: 'claimAmount', header: '理赔金额' },
      { field: 'bankAccount', header: '结算账户' },
      // { field: 'bankName', header: '银行名称' },
      { field: 'currency', header: '结算币种' },
      { field: 'claimStatus', header: '当前状态' },
    ];
  }

  setChartData() {
    this.data = {
      labels: ['已完成', '待审批', '已审批'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  setSteps() {
    this.items = [
      { label: '填写理赔信息' },
      { label: '提交审核' },
      { label: '待审核' }
    ];
  }

  setContractId() {
    this.contractId = [
      { label: 'jhto2g2', value: 'chengshu' },
      { label: 'jhto2g2', value: 'yie' },
      { label: 'jhto2g2', value: 'chengshu' },
      { label: 'jhto2g2', value: 'yie' },
      { label: 'jhto2g2', value: 'chengshu' },
      { label: 'jhto2g2', value: 'yie' },
      { label: 'jhto2g2', value: 'yie' },
    ];
  //  this.contractId[0] = { label: 'jhto2g2', value: 'chengshu' }
  }
}
