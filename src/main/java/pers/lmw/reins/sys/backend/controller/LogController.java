package pers.lmw.reins.sys.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.dao.LogMapper;
import pers.lmw.reins.sys.backend.entity.Company;
import pers.lmw.reins.sys.backend.entity.Contract;
import pers.lmw.reins.sys.backend.entity.ReinsClaim;
import pers.lmw.reins.sys.backend.entity.ReinsType;
import pers.lmw.reins.sys.backend.entity.User;

@CrossOrigin
@RestController
@RequestMapping("/log")
public class LogController {

	@Autowired
	LogMapper mapper;
	
	@GetMapping("/login")
	public List<User> loginLog() {
		return mapper.getLoginTimeNotNull();
	}
	
	@PutMapping("/deleteLogin/{userId}")
	public int deleteLoginLogById(@PathVariable("userId")String userId) {
		return mapper.deleteLogByUserId(userId);
	}
	
	// 公司日志管理
	@GetMapping("/company")
	public List<Company> getCompanyLog() {
		return mapper.getCompanyLog();
	}
	
	@PutMapping("/deleteCompany/{companyId}")
	public int deleteCompanyLog(@PathVariable("companyId") String companyId) {
		return mapper.deleteCompanyLog(companyId);
	}
	
	// 合同日志管理
	@GetMapping("/contract")
	public List<Contract> getContractLog(){
		return mapper.getContractLog();
	}
	
	@PutMapping("/deleteContract/{contractId}")
	public int deleteContractLog(@PathVariable("contractId") String contractId) {
		return mapper.deleteContractLog(contractId);
	}
	
	// 险种日志管理
	@GetMapping("/reinsType")
	public List<ReinsType> getReinsTypeLog(){
		return mapper.getReinsTypeLog();
	}
	
	@PutMapping("/deleteReinsType/{typeId}")
	public int deleteTypeLog(@PathVariable("typeId") String typeId) {
		return mapper.deleteReinsTypeLog(typeId);
	}
	
	// 理赔日志管理
	@GetMapping("/reinsClaim")
	public List<ReinsClaim> getReinsClaimLog(){
		return mapper.getReinsClaimLog();
	}
	
	@PutMapping("/deleteReinsClaim/{claimCode}")
	public int deleteClaimLog(@PathVariable("claimCode") String claimCode) {
		return mapper.deleteReinsClaimLog(claimCode);
	}
	
}
