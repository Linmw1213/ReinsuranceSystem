import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

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
      companyPhone: ['',Validators.compose(
        [Validators.required, Validators.pattern('/^1\d{10}$/')]
        )],
      companyEmail: ['',Validators.compose(
        [Validators.required, Validators.email]
        )],
      linkMan: ['', Validators.required],
      department: ['', Validators.required],
      duty: ['', Validators.required],
      linkPhone: ['', Validators.compose(
        [Validators.required, Validators.pattern('/^(13|14|15|17|18)[0-9]{9}/')]
        )],
      linkEmail: ['', Validators.compose(
        [Validators.required, Validators.email]
        )],
      bankAccount: ['', Validators.required],
      bankName: ['', Validators.required],
      currency: ['', Validators.required]
    });
  }

  // 保存并提交
  confirmBtnOnClick() {
  }

  // 返回合同列表主页
  return() {
    this.router.navigateByUrl('ReinsContractManagement');
  }
}
