import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReinsClaimService } from 'src/app/service/reins-claim.service';
import { ContractService } from 'src/app/service/contract.service';
import { CompanyService } from 'src/app/service/company.service';
import { ReinsClaim } from 'src/app/VO/reinsClaim';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {
  reinsClaimForm: FormGroup;
  contractId = [];

  @Output()
  reinsClaim: EventEmitter<ReinsClaim[]> = new EventEmitter();

  constructor(
    private claimService: ReinsClaimService,
    private fb: FormBuilder,
    private contractService: ContractService,
    private companyService: CompanyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.setContractId();
  }

  createForm() {
    this.reinsClaimForm = this.fb.group({
      contractId: ['', Validators.required],
      contractName: new FormControl({ value: '', disabled: true }),
      contractType: new FormControl({ value: '', disabled: true }),
      companyName: new FormControl({ value: '', disabled: true }),
      companyAccount: new FormControl({ value: '', disabled: true }),
      bankName: new FormControl({ value: '', disabled: true }),
      currency: new FormControl({ value: '', disabled: true }),
      claimSum: new FormControl({ value: '', disabled: true }),
      reinsType: new FormControl({ value: '', disabled: true }),
      description: [''],
    })
  }

  setContractId() {
    this.claimService.getContractId().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.contractId[i] = { label: data[i], value: data[i] };
        }
      }
    );
  }

  contractIdOnChange() {
    const id = this.reinsClaimForm.get('contractId').value;
    this.contractService.getBasicMsgById(id).subscribe(
      (data) => {
        this.reinsClaimForm.get('contractName').setValue(data.contractName);
        this.reinsClaimForm.get('reinsType').setValue(data.reinsTypeName);
        this.reinsClaimForm.get('contractType').setValue(data.contractTypeName);
        this.reinsClaimForm.get('companyName').setValue(data.companyName);

        const companyName = this.reinsClaimForm.get('companyName').value;
        this.companyService.getCompanyAccountByCompanyName(companyName).subscribe(
          (company) => {
            this.reinsClaimForm.get('currency').setValue(company.currency);
            this.reinsClaimForm.get('companyAccount').setValue(company.bankAccount);
          }
        )

        const typename = this.reinsClaimForm.get('contractType').value;
        if (typename == '成数分保') {
          // 分出公司应付赔款、自留保费
          const outPay = data.pay * (1 - data.retention_ratio);

          // 再保公司应付赔款、再保费
          const enterPay = data.pay * data.retention_ratio;

          this.reinsClaimForm.get('claimSum').setValue(outPay + enterPay);

        } else {
          // 分出公司应付赔款
          const outPay = data.retention / data.total * data.pay;

          // 再保公司应付赔款
          const enterPay = (data.total - data.retention) / data.total * data.pay;
          this.reinsClaimForm.get('claimSum').setValue(outPay + enterPay);
        }

      })
  }

  submit() {
    const reinsClaim = {
      claimSum: this.reinsClaimForm.get('claimSum').value,

      contractId: this.reinsClaimForm.get('contractId').value,
      contractName: this.reinsClaimForm.get('contractName').value,
      contractType: this.reinsClaimForm.get('contractType').value,

      companyName: this.reinsClaimForm.get('companyName').value,
      companyAccount: this.reinsClaimForm.get('companyAccount').value,
      currency: this.reinsClaimForm.get('currency').value,

      description: this.reinsClaimForm.get('description').value,
      operator: sessionStorage.getItem('currentUsername'),
    }

    this.claimService.addReinsClaim(reinsClaim as ReinsClaim).subscribe(
      (data) => {
        if (data == 1) {
          console.log('新增理赔件成功');
          this.claimService.getAll().subscribe(
            (data) => {
              setInterval(() => {
                this.reinsClaim.emit(data);
              }, 1000);
            }
          )
          // this.router.navigateByUrl('ReinsClaimManagement');
        } else {
          console.log('无法添加');
        }
      }
    )
  }
}
