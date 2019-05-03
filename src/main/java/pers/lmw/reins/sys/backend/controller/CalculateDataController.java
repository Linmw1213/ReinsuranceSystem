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
import pers.lmw.reins.sys.backend.service.CalculateDataService;
import pers.lmw.reins.sys.backend.util.SetContractIdUtil;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping("/calculateData")
public class CalculateDataController {

	@Autowired
	CalculateDataService calculateDataService;
	
	SetContractIdUtil setIdUtil;
	
	@GetMapping("/getAll")
	public List<CalculateData> getAll(){
		return calculateDataService.getAll();
	}
	
	@PostMapping("/add")
	public int add(@RequestBody CalculateData data) {
//		data.setContractId(ContractController.contractID);
		return calculateDataService.add(data);
	}
	
	@PutMapping("/modify")
	public int modify(@RequestBody CalculateData data) {
		return calculateDataService.modify(data);
	}
	
	@DeleteMapping("/delete/{contractId}")
	public int delete(@PathVariable(value="contractId") String contractId) {
		return calculateDataService.delete(contractId);
	}
}
