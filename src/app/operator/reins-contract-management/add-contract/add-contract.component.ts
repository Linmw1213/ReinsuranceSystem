import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contract } from 'src/app/VO/contract';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  addContractForm: FormGroup;
  quotaAshore = false;
  surplus = false;
  contractTypeList: SelectItem[];
  companyList: SelectItem[];
  reinsTypeList: SelectItem[];

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.dropdownList();
  }

  // 响应式表单
  private createForm() {
    this.addContractForm = this.fb.group({
      contractId: ['', Validators.required],
      contractName: ['', Validators.required],
      companyName: ['', Validators.required],
      contractType: ['', Validators.required],
      reinsType: ['', Validators.required],
      signDate: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: [''],
      contractStatus: [''],

      retention: [''],
      split_amount: [''],
      ceiling_top: [''],
      line_no: [''],
      contract_limit: [''],
      risk_unit: ['']
    });
  }

  // 返回合同列表主页
  return(name: string) {
    this.router.navigateByUrl('ReinsContractManagement');
  }

  /**  公司列表；合同类型：成数/溢额；险种； */
  dropdownList() {
    this.companyList = [
      { label: '友邦资讯科技有限公司', value: '1000' },
      { label: '人寿再保险公司', value: '1001' },
    ];

    this.contractTypeList = [
      { label: '成数再保险', value: 'type01' },
      { label: '溢额再保险', value: 'type02' },
    ];

    this.reinsTypeList = [
      { label: '人身险 ', value: 'body' },
      { label: '健康险', value: 'health' },
    ]
  }

  /** 选择成数分保/溢额分保 */
  contractTypeOnChange() {
    const value = this.addContractForm.get('contractType').value;
    if (value === 'type01') {
      this.quotaAshore = true;
      this.surplus = false;
    } else if (value === 'type02') {
      this.surplus = true;
      this.quotaAshore = false;
    } else {
      this.quotaAshore = false;
      this.surplus = false;
    }
  }
  
}
