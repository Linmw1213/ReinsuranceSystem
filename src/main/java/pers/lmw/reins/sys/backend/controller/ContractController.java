package pers.lmw.reins.sys.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.dao.ContractMapper;
import pers.lmw.reins.sys.backend.entity.CalculateData;
import pers.lmw.reins.sys.backend.entity.Contract;
import pers.lmw.reins.sys.backend.service.ContractService;
import pers.lmw.reins.sys.backend.util.SetContractIdUtil;
import pers.lmw.reins.sys.backend.util.TransferTimeUtil;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping("/contract")
public class ContractController {

	@Autowired
	ContractService service;
	
	@Autowired
	ContractMapper mapper;

	@Autowired
	SetContractIdUtil setIdUtil;

	@Autowired
	TransferTimeUtil timeUtil;
	
	@GetMapping("/getAll")
	public List<Contract> getAll() {
		return service.getAllContract();
	}

	@PostMapping("/add")
	public int add(@RequestBody Contract contract) {
		String contractId = setIdUtil.generate(contract.getCompanyName());
		contract.setContractId(contractId);
		contract.setBeginDate(timeUtil.stampToDate(contract.getBeginDate()));
		contract.setStopDate(timeUtil.stampToDate(contract.getStopDate()));
		contract.setCreate_time(timeUtil.getCurrentTime());
		return mapper.addContract(contract);
	}

	@PutMapping("/modify")
	public int modify(@RequestBody Contract contract) {
		String contractId = setIdUtil.generate(contract.getCompanyName());
		contract.setContractId(contractId);
		contract.setBeginDate(timeUtil.stampToDate(contract.getBeginDate()));
		contract.setStopDate(timeUtil.stampToDate(contract.getStopDate()));
		contract.setModify_time(timeUtil.getCurrentTime());
		return service.updateContract(contract);
	}

	@DeleteMapping("delete/{contractId}")
	public int delete(@PathVariable(value = "contractId") String contractId) {
		return service.deleteContract(contractId);
	}
	
	@GetMapping("/getId")
	public List<String> getContractId(){
		return service.getContractId();
	}
	
	@GetMapping("/getCalculateData/{contractId}")
	public CalculateData getData(@PathVariable(value="contractId") String contractId) {
		return service.getCalculateDataById(contractId);
	}
	
	@GetMapping("/getBasicMsg/{contractId}")
	public Contract getBasicMsg(@PathVariable(value="contractId") String contractId){
		return service.getBasicMsgById(contractId);
	}
	
}
