import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/service/company.service';
import { ReinsTypeService } from 'src/app/service/reins-type.service';
import { ContractTypeService } from 'src/app/service/contract-type.service';
import { Contract } from 'src/app/VO/contract';
import { ContractService } from 'src/app/service/contract.service';
import { ReinsCalculationService } from 'src/app/service/reins-calculation.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  addContractForm: FormGroup;
  quotaAshore = false;
  surplus = false;
  contractTypeList = [];
  companyList = [];
  reinsTypeList = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private contractService: ContractService,
    private companyService: CompanyService,
    private reinsTypeService: ReinsTypeService,
    private contractTypeService: ContractTypeService,
  ) { }

  ngOnInit() {
    this.createForm();
    this.dropdownList();
    this.testDate();
    console.log('form:' + this.addContractForm.value);
  }

  testDate() {
    let today = new Date();
    let date = this.addContractForm.get('beginDate').value;
    // date.toLocaleDateString();
    // console.log('month:' + today.getFullYear());
    // console.log('month:' + today.getMonth());
    // console.log('date:' + today.toLocaleDateString());
    // console.log('test:' + date.valueOf());
  }

  // 响应式表单
  private createForm() {
    this.addContractForm = this.fb.group({
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

  // 返回合同列表主页
  return(name: string) {
    this.router.navigateByUrl('ReinsContractManagement');
  }

  /**  公司列表；合同类型：成数/溢额；险种； */
  dropdownList() {
    this.companyService.getCompanyMessages().subscribe(
      (data) => {
        console.log('length:' + data.length);
        console.log('id:' + data[1].companyId)
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
    const value = this.addContractForm.get('contractTypeName').value;
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

  submitAddMsg() {
    const beginDate = this.addContractForm.get('beginDate').value;
    const stopDate = this.addContractForm.get('stopDate').value;
    const contract = {
      contractName: this.addContractForm.get('contractName').value,
      companyName: this.addContractForm.get('companyName').value,
      contractTypeName: this.addContractForm.get('contractTypeName').value,
      contractStatus: this.addContractForm.get('contractStatus').value,
      reinsTypeName: this.addContractForm.get('reinsTypeName').value,
      description: this.addContractForm.get('description').value,
      beginDate: beginDate.valueOf(),
      stopDate: stopDate.valueOf(),
      operator: sessionStorage.getItem('currentUsername'),

      total: this.addContractForm.get('total').value,
      insurance_expence: this.addContractForm.get('insurance_expence').value,
      retention_ratio: this.addContractForm.get('retention_ratio').value,
      retention: this.addContractForm.get('retention').value,
      line_num: this.addContractForm.get('line_num').value,
      ceiling_top: this.addContractForm.get('ceiling_top').value,
      pay: this.addContractForm.get('pay').value,
    }

    this.contractService.addContract(contract as Contract).subscribe(
      (data) => {
        if(data == 1 ){
          console.log('add contract succeessfully');
        } else {
          console.log('add failured');
        }
      }
    );

  }

}
