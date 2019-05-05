import { Component, OnInit } from '@angular/core';
import { Company } from '../../VO/company'
import { CompanyService } from 'src/app/service/company.service';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, DialogService } from 'primeng/api';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-reins-company-management',
  templateUrl: './reins-company-management.component.html',
  styleUrls: ['./reins-company-management.component.css'],
  providers: [DialogService, MessageService],
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

  companyMsg: Company[];
  searchCompany: Company;
  // deleteCompany: Company;
  arr: any[] = [];
  companyForm: FormGroup;
  displayAddDialog = false;
  searchDialog = false;
  modifyDialog = false;
  cols: any[];
  delete = false;
  modifyAlert = false;
  modifyIndex: any;
  notFound: false;

  modifyFailured =  false;
  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    private service: CompanyService,
    private fb: FormBuilder,
    private router: Router,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getCompanyMsg();
    this.setCols();
  }

  private createForm() {
    this.companyForm = this.fb.group({
      companyId: new FormControl('', Validators.required),
      companyCode: new FormControl(''),
      modifyArr: new FormArray(
        [this.createModifyFormArray()]
      ),

      searchCompanyId: [''],
      searchCompanyName: [''],
      searchCompanyAddress: [''],
      searchCompanyPhone: [''],
      searchCompanyEmail: [''],
      searchLinkMan: [''],
      searchDepartment: [''],
      searchDuty: [''],
      searchLinkPhone: [''],
      searchLinkEmail: [''],
      searchBankAccount: [''],
      searchBankName: [''],
      searchCurrency: [''],
    });
  }

  private createModifyFormArray() {
    return this.fb.group({
      modifyCompanyId: ['', Validators.required],
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

  /** get company by id  */
  getCompanyById() {
    const id = this.companyForm.get('companyId').value;
    if (this.companyForm.get('companyId').valid) {
      this.searchDialog = true;
      this.service.getCompanyById(id).subscribe((company) => {
        this.companyForm.get('searchCompanyId').setValue(company.companyId);
        this.companyForm.get('searchCompanyName').setValue(company.companyName);
        this.companyForm.get('searchCompanyAddress').setValue(company.companyAddress);
        this.companyForm.get('searchCompanyPhone').setValue(company.companyPhone);
        this.companyForm.get('searchCompanyEmail').setValue(company.companyEmail);
        this.companyForm.get('searchLinkMan').setValue(company.linkMan);
        this.companyForm.get('searchLinkPhone').setValue(company.linkPhone);
        this.companyForm.get('searchLinkEmail').setValue(company.linkEmail);
        this.companyForm.get('searchDuty').setValue(company.duty);
        this.companyForm.get('searchDepartment').setValue(company.department);
        this.companyForm.get('searchBankAccount').setValue(company.bankAccount);
        this.companyForm.get('searchBankName').setValue(company.bankName);
        this.companyForm.get('searchCurrency').setValue(company.currency);
      });
    }
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

  modifyBtnOnClick(rowData: any) {
    this.modifyIndex = rowData;
    this.modifyDialog = true;
    const arr = this.companyForm.get('modifyArr') as FormArray;
    arr.at(0).get('modifyCompanyId').setValue(rowData.companyId);
    arr.at(0).get('modifyCompanyName').setValue(rowData.companyName);
    arr.at(0).get('modifyCompanyAddress').setValue(rowData.companyAddress);
    arr.at(0).get('modifyCompanyEmail').setValue(rowData.companyEmail);
    arr.at(0).get('modifyCompanyPhone').setValue(rowData.companyPhone);
    arr.at(0).get('modifyLinkMan').setValue(rowData.linkMan);
    arr.at(0).get('modifyLinkPhone').setValue(rowData.linkPhone);
    arr.at(0).get('modifyDepartment').setValue(rowData.department);
    arr.at(0).get('modifyDuty').setValue(rowData.duty);
    arr.at(0).get('modifyBankAccount').setValue(rowData.bankAccount);
    arr.at(0).get('modifyBankName').setValue(rowData.bankName);
    arr.at(0).get('modifyCurrency').setValue(rowData.currency);
  }

  savaCompany() {
    this.modifyDialog = false;
    this.modifyAlert = true;

    const arr = this.companyForm.get('modifyArr') as FormArray;
    const id = this.modifyIndex.id;
    const company: Company = {
      id: id,
      companyId: arr.at(0).get('modifyCompanyId').value,
      companyName: arr.at(0).get('modifyCompanyName').value,
      companyAddress: arr.at(0).get('modifyCompanyAddress').value,
      companyPhone: arr.at(0).get('modifyCompanyPhone').value,
      companyEmail: arr.at(0).get('modifyCompanyEmail').value,
      linkMan: arr.at(0).get('modifyLinkMan').value,
      department: arr.at(0).get('modifyDepartment').value,
      duty: arr.at(0).get('modifyDuty').value,
      linkPhone: arr.at(0).get('modifyLinkPhone').value,
      linkEmail: '1209215924@qq.com',
      bankAccount: arr.at(0).get('modifyBankAccount').value,
      bankName: arr.at(0).get('modifyBankName').value,
      currency: arr.at(0).get('modifyCurrency').value,
    };

    this.service.updateCompany(company).subscribe(
      (data) => {
        if (data == 1) {
          this.service.getCompanyMessages().subscribe((companyMsg) => {
            this.companyMsg = companyMsg;
          });
          this.modifyAlert = true;
        } else {
          this.modifyFailured = true;
        }
      }
    );
  }

  /** delete company */
  deleteBtnOnClick(company: Company) {
    this.delete = true;
    this.companyMsg = this.companyMsg.filter(c => c !== company);
    this.service.deleteCompany(company.companyId).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  saveModify() {
    this.modifyDialog = false;
    this.modifyAlert = true;
    const arr = this.companyForm.get('modifyArr') as FormArray;
    console.log('mArr:' + arr.at(0).get('modifyCompanyCode').value);
    this.searchCompany = arr.value;
    console.log('company:' + arr.value);

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
