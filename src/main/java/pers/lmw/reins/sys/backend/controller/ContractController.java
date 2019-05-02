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

import pers.lmw.reins.sys.backend.entity.CalculateData;
import pers.lmw.reins.sys.backend.entity.Contract;
import pers.lmw.reins.sys.backend.service.CalculateDataService;
import pers.lmw.reins.sys.backend.service.ContractService;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping("/contract")
public class ContractController {

	@Autowired
	ContractService service;
	
	@Autowired
	CalculateDataService calculateDataService;
	
	@GetMapping("/getAll")
	public List<Contract> getAll() {
		return service.getAllContract();
	}
	
	@PostMapping("/add")
	public void add(@RequestBody Contract contract, @RequestBody CalculateData data) {
		 service.addContract(contract);
		 calculateDataService.add(data);
	}
	
	@PutMapping("/modify/{contractId}")
	public void modify(@RequestBody Contract contract, @RequestBody CalculateData data) {
		service.updateContract(contract);
		calculateDataService.modify(data);
	}
	
	@DeleteMapping("delete/{contractId}")
	public void delete(@PathVariable(value="contractId") String contractId) {
		 service.deleteContract(contractId);
		 calculateDataService.delete(contractId);
	}
	
	
}
