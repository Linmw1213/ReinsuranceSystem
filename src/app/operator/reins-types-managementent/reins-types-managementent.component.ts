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
  addReinsTypeForm: FormGroup;
  constructor(private reinsTypeService: ReinsTypeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllReinsType();
    this.setCols();
    this.craeteForm();
  }

  craeteForm() {
    this.addReinsTypeForm = this.fb.group({
      reinsTypeName: '',
      description: ''
    })
  }

  getAllReinsType() {
    this.reinsTypeService.getReinsTypes().subscribe(
      (data) => {
        this.reinsTypes = data;
        console.log(data);
      }
    );
  }

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

  editReinsType(rowData: any) {
    console.log('type' + rowData.typeId);
  }

  deleteReinsType(rowData: any) {

  }

  addReinsType() {
  }

}
