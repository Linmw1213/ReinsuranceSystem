import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem, ConfirmationService, Message } from 'primeng/api';


@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css'],
  providers: [ConfirmationService]
})
export class ForgotPwdComponent implements OnInit {

  updatePwdForm: FormGroup;
  displayUsername = true;
  displayReset = false;
  items: MenuItem[];
  msgs: Message[] = [];
  constructor(
    private fb: FormBuilder,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.updatePwdForm = this.fb.group({
      oldPassword: ['', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(20)
      ])],
      newPassword: ['', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(20)
      ])],
      repeatPwd: ['', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(20)
      ])],
    });
  }

  nextBtnOnClick() {
    this.displayUsername = false;
    this.displayReset = true;
  }

  setItems() {
    this.items = [
      { label: '确认身份信息' },
      { label: '重置密码' },
      { label: '' }
    ];
  }

  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        // this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
