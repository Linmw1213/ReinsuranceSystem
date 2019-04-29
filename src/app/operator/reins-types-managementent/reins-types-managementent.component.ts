import { Component, OnInit } from '@angular/core';
import { ReinsTypeService } from 'src/app/service/reins-type.service';
import { ReinsType } from 'src/app/VO/reinsType';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  editDialog = false;
  constructor(private reinsTypeService: ReinsTypeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllReinsType();
    this.setCols();
    this.craeteForm();
  }

  craeteForm() {
    this.reinsTypeForm = this.fb.group({
      reinsTypeName: '',
      description: ''
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
      // { field: 'description', header: '备注' },
      { field: 'modifyTime', header: '操作时间' },
      { field: 'operatorName', header: '操作员' },
      // { field: 'operatorId', header: '操作员编号' }
    ];
  }

  // 修改险种
  editReinsTypeById(rowData: any) {
    console.log('type' + rowData.typeId);
    this.editDialog = true;
  }

  // 删除险种
  deleteReinsType(event: Event,rowData: any) {
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
      modifyTime: '2019/12/13',
      typeStatus: '待审核',
      operatorName: '李白',
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
