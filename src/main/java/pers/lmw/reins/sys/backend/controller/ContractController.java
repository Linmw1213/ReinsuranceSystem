package pers.lmw.reins.sys.backend.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
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
	SetContractIdUtil setIdUtil;

	@Autowired
	TransferTimeUtil timeUtil;

	public String stampToDate(String s) {
		String res;
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		long lt = new Long(s);
		Date date = new Date(lt);
		res = simpleDateFormat.format(date);
		return res;
	}

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
		contract.setModify_time(null);
		return service.addContract(contract);
	}

	@PutMapping("/modify/{contractId}")
	public int modify(@RequestBody Contract contract) {
		return service.updateContract(contract);

	}

	@DeleteMapping("delete/{contractId}")
	public int delete(@PathVariable(value = "contractId") String contractId) {
		return service.deleteContract(contractId);
	}

}
