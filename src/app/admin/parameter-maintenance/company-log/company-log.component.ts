import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { Company } from 'src/app/VO/company';

@Component({
  selector: 'app-company-log',
  templateUrl: './company-log.component.html',
  styleUrls: ['./company-log.component.css']
})
export class CompanyLogComponent implements OnInit {

  cols = [];
  company: Company[];
  constructor(private logService: LogService) { }
  
  ngOnInit() {
    this.getAll();
    this.setCols();
  }

  getAll() {
    this.logService.getCompanyLog().subscribe(
      (data) => {
        this.company = data;
      }
    )
  }

  setCols() {
    this.cols = [
      { field: 'companyId', header: '公司编号' },
      { field: 'companyName', header: '公司名称' },
      { field: 'operator', header: '操作员' },
      { field: 'createTime', header: '创建时间' },
      { field: 'modifyTime', header: '上次修改时间' }
    ];
  }

  delete(company: any) {
    this.logService.deleteCompanyLog(company.companyId).subscribe(
      (data) => {
        if (data == 1) {
          this.company = this.company.filter(c => c !== company);
          console.log('删除成功');
        } else {
          console.log('删除失败');
        }
      }
    )
  }

}
