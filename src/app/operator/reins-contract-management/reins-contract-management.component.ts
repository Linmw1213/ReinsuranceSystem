import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Contract } from 'src/app/VO/contract';

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

  constructor(private fb: FormBuilder) {
    this.cities1 = [
      { label: '合同类型', value: null },
      { label: '成数分保合同', value: 'chengshu' },
      { label: '溢额分保合同', value: 'yie' },
    ];
    this.contracts = [
      { 
        contractId: 'r3278r2', contractName: '合同名称1', companyName: '公司名称1', contractType: '成数分保', linfenType: '是', contractStatus: '正常', description: '合同描述内容', beginDate: '2010/01/01', endDate: '2021/01/01' 
      },
      { 
        contractId: 'jhto2g2', contractName: '合同名称2', companyName: '公司名称1', contractType: '溢额分保', linfenType: '是', contractStatus: '正常', description: '合同描述内容', beginDate: '2015/12/30', endDate: '2030/01/01' 
      },
      { 
        contractId: 'h453w54', contractName: '合同名称3', companyName: '公司名称1', contractType: '成数分保', linfenType: '否', contractStatus: '正常', description: '合同描述内容', beginDate: '2015/11/30', endDate: '2020/01/01' },
      { 
        contractId: 'g43gwwg', contractName: '合同名称4', companyName: '公司名称1', contractType: '成数分保', linfenType: '是', contractStatus: '正常', description: '合同描述内容', beginDate: '1998/03/04', endDate: '2025/01/01' },
      { 
        contractId: 'gf45wg5', contractName: '合同名称5', companyName: '公司名称1', contractType: '成数分保', linfenType: '是', contractStatus: '正常', description: '合同描述内容', beginDate: '2010/11/30', endDate: '2040/01/01' },
      { 
        contractId: 'bhv5y5w', contractName: '合同名称6', companyName: '公司名称1', contractType: '溢额分保', linfenType: '否', contractStatus: '正常', description: '合同描述内容', beginDate: '2015/12/30', endDate: '2030/01/01' },
      { 
        contractId: 'ybw5fsd', contractName: '合同名称7', companyName: '公司名称1', contractType: '成数分保', linfenType: '是', contractStatus: '正常', description: '合同描述内容', beginDate: '2015/11/30', endDate: '2020/01/01' },
      { 
        contractId: '45665e5', contractName: '合同名称8', companyName: '公司名称1', contractType: '溢额分保', linfenType: '是', contractStatus: '正常', description: '合同描述内容', beginDate: '2010/11/30', endDate: '2028/01/01' },
      { 
        contractId: 'he6sb5v', contractName: '合同名称9', companyName: '公司名称1', contractType: '成数分保', linfenType: '是', contractStatus: '正常', description: '合同描述内容', beginDate: '2015/12/30', endDate: '2027/01/01' }
    ];
  }

  ngOnInit() {
    this.createForm();
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

  // 选中事件
  selectContract(event: Event, contract: Contract) {
    this.selectedContract = contract;
    this.displayDialog = true;
    event.preventDefault();
}

  //按钮点击事件
  radioBtnOnClick() {
    this.contractForm.get('contractType').value
  }

  serachBtnOnClikc() {

  }

  addBtnOnClick() {

  }

  modifyBtnOnClick(index: number) {

  }

  deleteBtnOnClick(index: number) {

  }

}
