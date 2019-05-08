import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { ReinsType } from 'src/app/VO/reinsType';

@Component({
  selector: 'app-reins-type-log',
  templateUrl: './reins-type-log.component.html',
  styleUrls: ['./reins-type-log.component.css']
})
export class ReinsTypeLogComponent implements OnInit {

  reinsType: ReinsType[];
  cols = [];
  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getAll();
    this.setCols();
  }


  getAll() {
    this.logService.getReinsTypeLog().subscribe(
      (data) => {
        this.reinsType = data;
        console.log(data);
      }
    )
  }

  setCols() {
    this.cols = [
      { field: 'typeId', header: '险种编号' },
      { field: 'typeName', header: '险种名称' },
      { field: 'operator', header: '操作员' },
      { field: 'create_time', header: '创建时间' },
      // { field: 'modify_time', header: '上次修改时间' }
    ];
  }

  delete(reinsType: any) {
    this.logService.deleteReinsTypeLog(reinsType.typeId).subscribe(
      (data) => {
        if (data == 1) {
          this.reinsType = this.reinsType.filter(c => c !== reinsType);
          console.log('删除成功');
        } else {
          console.log('删除失败');
        }
      }
    )
  }


}
