import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from 'src/app/VO/company';

@Component({
  selector: 'app-add-reins-company',
  templateUrl: './add-reins-company.component.html',
  styleUrls: ['./add-reins-company.component.css']
})
export class AddReinsCompanyComponent implements OnInit {

  addForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private companyService: CompanyService) { }

  ngOnInit() {
    this.createForm();
  }

  // 响应式表单
  private createForm() {
    this.addForm = this.fb.group({
      companyId: ['', Validators.required],
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyPhone: ['', Validators.compose(
        [Validators.required]
      )],
      companyEmail: ['', Validators.compose(
        [Validators.required, Validators.email]
      )],
      linkMan: ['', Validators.required],
      department: ['', Validators.required],
      duty: ['', Validators.required],
      linkPhone: ['', Validators.compose(
        [Validators.required]
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
    const company: Company = {
      companyId: this.addForm.get('companyId').value,
      companyName: this.addForm.get('companyName').value,
      companyAddress: this.addForm.get('companyAddress').value,
      companyPhone: this.addForm.get('companyPhone').value,
      companyEmail: this.addForm.get('companyEmail').value,
      linkMan: this.addForm.get('linkMan').value,
      department: this.addForm.get('department').value,
      duty: this.addForm.get('duty').value,
      linkPhone: this.addForm.get('linkPhone').value,
      linkEmail: this.addForm.get('linkEmail').value,
      bankAccount: this.addForm.get('bankAccount').value,
      bankName: this.addForm.get('bankName').value,
      currency: this.addForm.get('currency').value,
    }

    this.companyService.addCompany(company).subscribe(
      (data) => {
        console.log(data + 'add successfully');
      }
    );
  }

  // 返回公司列表主页
  return() {
    this.router.navigateByUrl('ReinsCompanyManagement');
  }
}
