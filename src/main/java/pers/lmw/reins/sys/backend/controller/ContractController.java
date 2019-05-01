package pers.lmw.reins.sys.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.entity.Contract;
import pers.lmw.reins.sys.backend.service.ContractService;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping("/contract")
public class ContractController {

	@Autowired
	ContractService service;
	
	@GetMapping("/getAllContracts")
	public List<Contract> getAll() {
		return service.getAllContract();
	}
	
}
