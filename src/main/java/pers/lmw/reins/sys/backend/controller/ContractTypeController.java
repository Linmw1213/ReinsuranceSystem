package pers.lmw.reins.sys.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.entity.ContractType;
import pers.lmw.reins.sys.backend.service.ContractTypeService;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping("/contractType")
public class ContractTypeController {

	@Autowired
	ContractTypeService service;
	
	@GetMapping("/getAll")
	public List<ContractType> getAllContractTypes() {
		return service.getAllContractTypes();
	}
}
