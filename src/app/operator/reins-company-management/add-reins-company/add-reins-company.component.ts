import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-reins-company',
  templateUrl: './add-reins-company.component.html',
  styleUrls: ['./add-reins-company.component.css']
})
export class AddReinsCompanyComponent implements OnInit {

  addForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  // 响应式表单
  private createForm() {
    this.addForm = this.fb.group({
      companyCode: ['', Validators.required],
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyPhone: ['', Validators.required],
      companyEmail: ['', Validators.required],
      linkMan: ['', Validators.required],
      department: ['', Validators.required],
      duty: ['', Validators.required],
      linkPhone:  ['', Validators.required],
      linkEmail: ['', Validators.required],
      bankAccount: ['', Validators.required],
      bankName: ['', Validators.required],
      currency: ['', Validators.required]
    });
  }

  // 保存并提交
  confirmBtnOnClick() {
  }

  // 返回公司列表主页
  return() {
    this.router.navigateByUrl('ReinsCompanyManagement');
  }
}
