import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { ReinsClaim } from 'src/app/VO/reinsClaim';
import { ReinsClaimService } from 'src/app/service/reins-claim.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContractService } from 'src/app/service/contract.service';

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
  contractId = [];
  add = false;

  constructor(
    private service: ReinsClaimService,
    private contractService: ContractService) { }

  ngOnInit() {
    this.setChartData();
    this.setSteps();
    this.getAll();
    this.setCols();
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
    this.service.delete(rowData).subscribe(
      (data) => {
        if (data == 1) {
          this.reinsClaimArr = this.reinsClaimArr.filter(reinsClaim => reinsClaim !== rowData);
        } else {
          console.log('删除失败');
        }
      }
    )
  }


  setCols() {
    this.cols = [
      { field: 'claimCode', header: '理赔号' },
      { field: 'companyName', header: '再保公司' },
      { field: 'claimSum', header: '理赔金额' },
      { field: 'companyAccount', header: '结算账户' },
      { field: 'currency', header: '结算币种' },
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

  addBtnOnClick() {
    this.add = true;
  }
}
