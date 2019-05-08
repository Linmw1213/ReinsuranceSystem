package pers.lmw.reins.sys.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.entity.ReinsType;
import pers.lmw.reins.sys.backend.service.ReinsTypeService;
import pers.lmw.reins.sys.backend.util.TransferTimeUtil;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping("/reinsType")
public class ReinsTypeController {

	@Autowired
	ReinsTypeService service;
	
	@Autowired
	TransferTimeUtil timeUtil;
	
	@GetMapping("/getAll")
	public List<ReinsType> getAll() {
		return service.getAllReinsTypes();
	}
	
	@PostMapping("/add")
	public int add(@RequestBody ReinsType type) {
		type.setCreate_time(timeUtil.getCurrentTime());
		type.setStatus("待审核");
		return service.addReinsType(type);
	}
	
	@DeleteMapping("/delete/{typeId}")
	public int delete(@PathVariable(value = "typeId") String typeId) {
		return service.deleteReinsType(typeId);
	}
}
