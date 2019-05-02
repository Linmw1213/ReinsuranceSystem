package pers.lmw.reins.sys.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.entity.CalculateData;
import pers.lmw.reins.sys.backend.service.CalculateDataService;

@RestController
@RequestMapping("/caculateData")
public class CalculateDataController {

	@Autowired
	CalculateDataService service;
	
	@GetMapping("/getAll")
	public List<CalculateData> getAll(){
		return service.getAll();
	}
}
