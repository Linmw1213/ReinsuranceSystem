import { Component, OnInit } from '@angular/core';
import { Company } from '../../VO/company'
import { CompanyService } from 'src/app/service/company.service';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reins-company-management',
  templateUrl: './reins-company-management.component.html',
  styleUrls: ['./reins-company-management.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class ReinsCompanyManagementComponent implements OnInit {

  companyMsg: Company[] = [];
  arr: any[] = [];
  companyForm: FormGroup;
  displayAddDialog = false;
  searchDialog = false;
  modifyDialog = false;
  cols: any[];
  delete = false;
  modifyAlert = false;

  constructor(private service: CompanyService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.getCompanyMsg();
    this.setCols();
  }

  private createForm() {
    this.companyForm = this.fb.group({
      companyName: new FormControl('', Validators.required),
      companyCode: new FormControl({ value: 'Nancy', disabled: true }),
      modifyArr: new FormArray(
        [this.createModifyFormArray()]
      ),
    });
  }

  private createModifyFormArray() {
    return this.fb.group({
      modifyCompanyCode: ['', Validators.required],
      modifyCompanyName: ['', Validators.required],
      modifyCompanyAddress: ['', Validators.required],
      modifyCompanyPhone: ['', Validators.required],
      modifyCompanyEmail: ['', Validators.required],
      modifyLinkMan: ['', Validators.required],
      modifyDepartment: ['', Validators.required],
      modifyDuty: ['', Validators.required],
      modifyLinkPhone: ['', Validators.required],
      modifyBankAccount: ['', Validators.required],
      modifyBankName: ['', Validators.required],
      modifyCurrency: ['', Validators.required],
    });
  }

  getFormArray() {
    return this.companyForm.get('Arr') as FormArray;
  }

  // 显示所有公司信息
  getCompanyMsg() {
    this.service.getCompanyMessages().subscribe((companyMsg) => {
      this.companyMsg = companyMsg;
    });
  }

  setCols() {
    this.cols = [
      { field: 'companyId', header: '公司代码' },
      { field: 'companyName', header: '公司名称' },
      { field: 'companyAddress', header: '公司地址' },
      { field: 'linkMan', header: '联系人' },
      { field: 'companyPhone', header: '公司电话' },
      { field: 'bankAccount', header: '结算账户' },
    ];
  }

  // 根据公司代码/名字查询公司信息
  searchByInput() {
    this.companyForm.get('companyName').value;
  }

  // 添加公司信息
  addCompanyMsg() {

  }

  // 修改公司信息
  modifyCompanyMsg() {

  }

  //点击按钮
  addBtnOnClick() {
    // this.displayAddDialog = true;
    this.router.navigateByUrl('addCompanyMsg');
  }

  searchBtnOnClick() {
    if (this.companyForm.get('companyName').valid) {
      this.searchDialog = true;
    }
  }

  modifyBtnOnClick(index: any) {
    this.modifyDialog = true;
    const arr = this.companyForm.get('modifyArr') as FormArray;
    arr.at(0).get('modifyCompanyCode').setValue(index.companyCode);
    arr.at(0).get('modifyCompanyName').setValue(index.companyName);
    arr.at(0).get('modifyCompanyAddress').setValue(index.companyAddress);
    arr.at(0).get('modifyCompanyEmail').setValue(index.companyEmail);
    arr.at(0).get('modifyCompanyPhone').setValue(index.companyPhone);
    arr.at(0).get('modifyLinkMan').setValue(index.linkMan);
    arr.at(0).get('modifyLinkPhone').setValue(index.linkPhone);
    arr.at(0).get('modifyDepartment').setValue(index.department);
    arr.at(0).get('modifyDuty').setValue(index.duty);
    arr.at(0).get('modifyBankAccount').setValue(index.bankAccount);
    arr.at(0).get('modifyBankName').setValue(index.bankName);
    arr.at(0).get('modifyCurrency').setValue(index.currency);
  }


  deleteBtnOnClick(index: any) {
    this.delete = true;
  }

  saveModify() {
    this.modifyDialog = false;
    this.modifyAlert = true;
    const arr = this.companyForm.get('modifyArr') as FormArray;
    console.log('mArr:' + arr.at(0).get('modifyCompanyPhone').value);
  }

  test() {
    this.companyForm.get('name').setValue('username');
    this.companyForm.get('Arr').setValue([
      {
        control1: 'control1',
      }
    ]);
    console.log('value:' + this.companyForm.get('name').value);
    console.log('control1:' + this.companyForm.get('Arr').value);
    console.log('control1:' + this.companyForm.controls);
  }
}
