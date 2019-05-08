import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { Contract } from 'src/app/VO/contract';

@Component({
  selector: 'app-contract-log',
  templateUrl: './contract-log.component.html',
  styleUrls: ['./contract-log.component.css']
})
export class ContractLogComponent implements OnInit {

  contract: Contract[];
  cols=[];
  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getAll();
    this.setCols();
  }


  getAll() {
    this.logService.getContractLog().subscribe(
      (data) => {
        this.contract = data;
      }
    )
  }

  setCols() {
    this.cols = [
      { field: 'contractId', header: '公司编号' },
      { field: 'contractName', header: '公司名称' },
      { field: 'operator', header: '操作员' },
      { field: 'create_time', header: '创建时间' },
      { field: 'modify_time', header: '上次修改时间' }
    ];
  }

  delete(contract: any) {
    this.logService.deleteContractLog(contract.contractId).subscribe(
      (data) => {
        if (data == 1) {
          this.contract = this.contract.filter(c => c !== contract);
          console.log('删除成功');
        } else {
          console.log('删除失败');
        }
      }
    )
  }

}
