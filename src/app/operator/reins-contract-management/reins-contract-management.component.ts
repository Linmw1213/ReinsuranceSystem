import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Contract } from 'src/app/VO/contract';
import { ContractService } from 'src/app/service/contract.service';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { ReinsTypeService } from 'src/app/service/reins-type.service';
import { ContractTypeService } from 'src/app/service/contract-type.service';
import { UserInfoService } from 'src/app/service/user-info.service';
import { User } from 'src/app/VO/user';

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
  contractTypeList = [];
  companyList = [];
  reinsTypeList = [];

  currentUser: User;

  constructor(
    private fb: FormBuilder,
    private service: ContractService,
    private router: Router,
    private companyService: CompanyService,
    private reinsTypeService: ReinsTypeService,
    private contractTypeService: ContractTypeService) { }

  ngOnInit() {
    this.createForm();
    this.getAllContracts();
    this.dropdownList();
  }


  //创建响应式表单
  createForm() {
    this.contractForm = this.fb.group({
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
    this.service.deleteContract(contract).subscribe(
      (data) => {
        if (data === 1) {
          this.service.getContractMessages().subscribe((contracts => {
            this.contracts = contracts;
          }));
        } else {
          console.log('delete failured');
        }
      }
    );
  }

  modifyContract(event: Event, contract: Contract) {
    this.selectedContract = contract;
    event.preventDefault();
    this.modifyDialog = true;
  }

  /**  公司列表；合同类型：成数/溢额；险种； */
  dropdownList() {
    this.companyService.getCompanyMessages().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.companyList[i] = { label: data[i].companyName, value: data[i].companyName }
        }
      }
    );
    this.reinsTypeService.getReinsTypes().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.reinsTypeList[i] = { label: data[i].typeName, value: data[i].typeName }
        }
      }
    );
    this.contractTypeService.getContractTypes().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.contractTypeList[i] = { label: data[i].contractTypeName, value: data[i].contractTypeName }
        }
      }
    );

  }

  /** 选择成数分保/溢额分保 */
  contractTypeOnChange() {
    const value = this.contractForm.get('contractTypeName').value;
    if (value === '成数分保') {
      this.quotaAshore = true;
      this.surplus = false;
    } else if (value === '溢额分保') {
      this.surplus = true;
      this.quotaAshore = false;
    } else {
      this.quotaAshore = false;
      this.surplus = false;
    }
  }

  submitModifyMsg() {
    const beginDate = this.contractForm.get('beginDate').value;
    const stopDate = this.contractForm.get('stopDate').value;
    const contract = {
      contractId: this.contractForm.get('contractId').value,
      contractName: this.contractForm.get('contractName').value,
      companyName: this.contractForm.get('companyName').value,
      contractTypeName: this.contractForm.get('contractTypeName').value,
      contractStatus: this.contractForm.get('contractStatus').value,
      reinsTypeName: this.contractForm.get('reinsTypeName').value,
      description: this.contractForm.get('description').value,
      beginDate: beginDate.valueOf(),
      stopDate: stopDate.valueOf(),
      operator: sessionStorage.getItem('currentUserName'),
      modify_time: '',
      total: this.contractForm.get('total').value,
      insurance_expence: this.contractForm.get('insurance_expence').value,
      retention_ratio: this.contractForm.get('retention_ratio').value,
      retention: this.contractForm.get('retention').value,
      line_num: this.contractForm.get('line_num').value,
      ceiling_top: this.contractForm.get('ceiling_top').value,
      pay: this.contractForm.get('pay').value,
    }

    this.service.modifyContract(contract as Contract).subscribe(
      (data) => {
        if (data == 1) {
          this.service.getContractMessages().subscribe((contracts => {
            this.contracts = contracts;
          }));
        } else {
          console.log('modify failured');
        }
      }
    );
    this.modifyDialog = false;
  }



  addBtnOnClick() {
    this.router.navigateByUrl('addContract');
  }

}
