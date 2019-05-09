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
import pers.lmw.reins.sys.backend.util.SetContractIdUtil;
import pers.lmw.reins.sys.backend.util.TransferTimeUtil;

@CrossOrigin
@RestController
@RequestMapping("/reinsClaim")
public class ReinsClaimController {

	@Autowired
	ReinsClaimMapper mapper;

	@Autowired
	TransferTimeUtil timeUtil;

	@Autowired
	SetContractIdUtil setIdUtil;

	@GetMapping("/getAll")
	public List<ReinsClaim> getAll() {
		return mapper.getAll();
	}

	@PostMapping("/add")
	public int add(@RequestBody ReinsClaim rc) {
		int num = mapper.count();
		String id = setIdUtil.getRandomChar(4) + timeUtil.getCurrentTime2() + "00" + num;
		rc.setClaimCode(id);
		rc.setCreateTime(timeUtil.getCurrentTime());
		return mapper.add(rc);
	}

	@DeleteMapping("/delete/{claimCode}")
	public int delete(@PathVariable("claimCode") String claimCode) {
		return mapper.delete(claimCode);
	}
}
