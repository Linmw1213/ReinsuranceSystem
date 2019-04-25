import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/VO/contract';

@Component({
  selector: 'app-modify-contract',
  templateUrl: './modify-contract.component.html',
  styleUrls: ['./modify-contract.component.css']
})
export class ModifyContractComponent implements OnInit {
  @Input() contract: Contract;

  constructor() { }

  ngOnInit() {
  }

}
