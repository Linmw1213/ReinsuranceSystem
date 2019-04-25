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

  constructor(private fb: FormBuilder, private service: ContractService, private router: Router) {
    this.cities1 = [
      { label: '成数分保合同', value: 'contractType' },
      { label: '溢额分保合同', value: 'yie' },
    ];

  }

  ngOnInit() {
    this.createForm();
    this.getAllContracts();
  }

  //创建响应式表单
  createForm() {
    this.contractForm = this.fb.group({
      contractType: [''],
      contractName: new FormControl('', Validators.required),
      contractArr: new FormArray([this.createFormArray()]),
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
    this.contracts = this.contracts.filter(c=>c !== contract);
    this.service.deleteContract(contract);
  }

  addBtnOnClick() {
    this.router.navigateByUrl('addContract');
  }

}
