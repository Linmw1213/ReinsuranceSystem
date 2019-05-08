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

import pers.lmw.reins.sys.backend.dao.ReinsClaimMapper;
import pers.lmw.reins.sys.backend.entity.ReinsClaim;

@CrossOrigin
@RestController
@RequestMapping("/reinsClaim")
public class ReinsClaimController {

	@Autowired
	ReinsClaimMapper mapper;
	
	@GetMapping("/getAll")
	public List<ReinsClaim> getAll(){
		return mapper.getAll();
	}
	
	@PostMapping("/add")
	public int add(@RequestBody ReinsClaim rc) {
		return mapper.add(rc);
	}
	
	@DeleteMapping("/delete/{claimCode}")
	public int delete(@PathVariable("claimCode") String claimCode) {
		return mapper.delete(claimCode);
	}
}
