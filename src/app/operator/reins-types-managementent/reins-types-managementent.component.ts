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
      { field: 'typeStatus', header: '当前状态' },
    ];
  }

  // 修改险种
  editReinsType(rowData: any) {
    this.modifyDialog = true;
    console.log('data:' + rowData.typeId)
    this.reinsTypeForm.get('reinsTypeId').setValue(rowData.typeId);
    this.reinsTypeForm.get('reinsTypeName').setValue(rowData.typeName);
    this.reinsTypeForm.get('description').setValue(rowData.description);
    this.reinsTypeForm.get('modifyTime').setValue(rowData.modifyTime);
    this.reinsTypeForm.get('createTime').setValue(rowData.createTime);
    this.reinsTypeForm.get('typeStatus').setValue(rowData.typeStatus);
    this.reinsTypeForm.get('operator').setValue(rowData.operator);
    this.reinsTypeForm.get('operatorId').setValue(rowData.operatorId);
  }

  // 提交修改
  submitModifyMessage() {
    this.modifyDialog = false;
    const reinsType: ReinsType = {
      typeId: this.reinsTypeForm.get('reinsTypeId').value,
      typeName: this.reinsTypeForm.get('reinsTypeName').value,
      description: this.reinsTypeForm.get('description').value,
      createTime: this.reinsTypeForm.get('createTime').value,
      modifyTime: this.reinsTypeForm.get('modifyTime').value,
      operator: this.reinsTypeForm.get('operator').value,
      operatorId: this.reinsTypeForm.get('operatorId').value,
    }
    this.reinsTypeService.modiifyReinsType(reinsType).subscribe();
  }

  // 删除险种
  deleteReinsType(event: Event, rowData: any) {
    this.reinsTypes = this.reinsTypes.filter(reinstype => reinstype !== rowData);
    this.reinsTypeService.deleteReinsType(rowData).subscribe();
  }

  // 添加险种
  addReinsType() {
    this.addDialog = true;
  }

  // 提交添加的内容
  submitAddMessage() {
    const reinsType: ReinsType = {
      typeId: '1',
      typeName: this.reinsTypeForm.get('reinsTypeName').value,
      description: this.reinsTypeForm.get('description').value,
      createTime: '2019/12/13',
      modifyTime: '2019/12/13',
      operator: '李白',
      operatorId: '1001',
    }
    this.reinsTypes.push(reinsType);
    // this.addDialog = false;
    // this.reinsTypeService.addReinsType(reinsType).subscribe(
    //   (data) =>{
    //     this.reinsTypes.push(reinsType);
    //     console.log('data:' + data); 
    //   });
  }


}
