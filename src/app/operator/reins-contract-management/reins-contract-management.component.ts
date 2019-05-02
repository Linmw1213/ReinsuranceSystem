import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Contract } from 'src/app/VO/contract';
import { ContractService } from 'src/app/service/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reins-contract-management',
  templateUrl: './reins-contract-management.component.html',
  styleUrls: ['./reins-contract-management.component.css']
})
export class ReinsContractManagementComponent implements OnInit {

  contractForm: FormGroup;
  cities1: SelectItem[];
  contracts: Contract[];
  sortOptions: SelectItem[];
  selectedContract: Contract;
  displayDialog = false;
  sortKey: string;
  sortField: string;
  sortOrder: number;
  modifyDialog = false;

  quotaAshore = false;
  surplus = false;
  contractTypeList: SelectItem[];
  companyList: SelectItem[];
  reinsTypeList: SelectItem[];

  constructor(private fb: FormBuilder, private service: ContractService, private router: Router) {
    this.cities1 = [
      { label: '成数分保合同', value: 'contractType' },
      { label: '溢额分保合同', value: 'yie' },
    ];

  }

  ngOnInit() {
    this.createForm();
    this.getAllContracts();
    this.dropdownList();
  }

  //创建响应式表单
  createForm() {
    this.contractForm = this.fb.group({
      contractType: ['', Validators.required],
      reinsType: ['', Validators.required],
      signDate: ['', Validators.required],
      endDate: ['', Validators.required],

      split_amount: [''],
      line_no: [''],
      contract_limit: [''],
      risk_unit: [''],
      // contractArr: new FormArray([this.createFormArray()]),

      contractId: [''],
      contractName: [''],
      companyName: [''],
      contractTypeName: [''],
      contractStatus: [''],
      reinsTypeName: [''],
      description: [''],
      appendix: [''],
      beginDate: [''],
      stopDate: [''],
      operator: [''],
      create_time: [''],
      modify_time: [''],

      total: [''],
      insurance_expence: [''],
      retention_ratio: [''],
      retention: [''],
      line_num: [''],
      ceiling_top: [''],
      pay: [''],
    });

  }

  private createFormArray() {
    return this.fb.group({
      companyCode: [''],
      companyName: [''],
      companyAddress: [''],
      contacts: [''],
      apartment: [''],
      duties: [''],
      phoneNum: [''],
      bankAccount: [''],
      bankName: [''],
      currency: [''],
    });
  }

  private createContractFormArr() {
    return this.fb.group({
      contractId: [''],
      contractName: [''],
      companyName: [''],
      contractTypeName: [''],
      contractStatus: [''],
      reinsTypeName: [''],
      description: [''],
      appendix: [''],
      beginDate: [''],
      stopDate: [''],
      operator: [''],
      create_time: [''],
      modify_time: [''],
    })
  }

  private createCalculateDataFormArr() {
    return this.fb.group({
      total: [''],
      insurance_expence: [''],
      retention_ratio: [''],
      retention: [''],
      line_num: [''],
      ceiling_top: [''],
      pay: [''],
    })
  }

  getFormArray() {
    const array = this.contractForm.get("contractArr") as FormArray;
  }

  // 获取所有合同
  getAllContracts() {
    this.service.getContractMessages().subscribe((contracts => {
      this.contracts = contracts;
    }));
  }

  // 选中事件
  selectContract(event: Event, contract: Contract) {
    this.selectedContract = contract;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;
    console.log('value:' + this.sortKey);
    console.log('value field:' + this.sortField);
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  delete(event: Event, contract: Contract) {
    this.contracts = this.contracts.filter(c => c !== contract);
    this.service.deleteContract(contract);
  }

  modifyContract(event: Event, contract: Contract) {
    this.selectedContract = contract;
    this.contractForm.get('reinsType').setValue(contract.companyName);
    event.preventDefault();
    this.modifyDialog = true;
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
    const value = this.contractForm.get('contractType').value;
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

  addBtnOnClick() {
    this.router.navigateByUrl('addContract');
  }

}
