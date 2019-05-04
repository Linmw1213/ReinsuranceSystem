import { Component, OnInit } from '@angular/core';
import { ReinsTypeService } from 'src/app/service/reins-type.service';
import { ReinsType } from 'src/app/VO/reinsType';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reins-types-managementent',
  templateUrl: './reins-types-managementent.component.html',
  styleUrls: ['./reins-types-managementent.component.css']
})
export class ReinsTypesManagemententComponent implements OnInit {

  reinsTypes: ReinsType[];
  cols: any[];
  reinsTypeForm: FormGroup;
  addDialog = false;
  modifyDialog = false;
  constructor(private reinsTypeService: ReinsTypeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllReinsType();
    this.setCols();
    this.craeteForm();
  }

  craeteForm() {
    this.reinsTypeForm = this.fb.group({
      reinsTypeId: new FormControl({ value: '', disabled: true }),
      reinsTypeName: ['', Validators.required],
      description: '',
      createTime: '',
      modifyTime: new FormControl({ value: '', disabled: true }),
      typeStatus: new FormControl({ value: '', disabled: true }),
      operator: new FormControl({ value: '', disabled: true }),
      operatorId: new FormControl({ value: '', disabled: true }),
    })
  }

  // 获取所有险种
  getAllReinsType() {
    this.reinsTypeService.getReinsTypes().subscribe(
      (data) => {
        this.reinsTypes = data;
        console.log(data);
      }
    );
  }

  // 设置表格头、值
  setCols() {
    this.cols = [
      { field: 'typeId', header: '险种代码' },
      { field: 'typeName', header: '险种名称' },
      { field: 'description', header: '备注' },
      { field: 'status', header: '当前状态' },
    ];
  }

  // 删除险种
  deleteReinsType(event: Event, rowData: any) {
    this.reinsTypeService.deleteReinsType(rowData).subscribe(
      (data) => {
        if (data == 1) {
          this.reinsTypes = this.reinsTypes.filter(reinstype => reinstype !== rowData);
        } else {
          console.log('delete failured')
        }
      }
    );
  }

  // 添加险种
  addReinsType() {
    this.addDialog = true;
  }

  // 提交添加的内容
  submitAddMessage() {
    const reinsType = {
      typeName: this.reinsTypeForm.get('reinsTypeName').value,
      description: this.reinsTypeForm.get('description').value,
      operator: sessionStorage.getItem('currentUserName'),
      operatorId: sessionStorage.getItem('currentUserId'),
    }
    this.addDialog = false;
    this.reinsTypeService.addReinsType(reinsType as ReinsType).subscribe(
      (data) => {
        if (data == 1) {
          this.reinsTypes.push(reinsType as ReinsType);
        } else {
          console.log('data:' + data);
        }
      });
  }


}
