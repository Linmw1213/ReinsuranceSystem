package pers.lmw.reins.sys.backend.controller;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.entity.Company;
import pers.lmw.reins.sys.backend.service.CompanyService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping(value="/company")
public class CompanyController {
	
	@Autowired CompanyService companyService;
	
	@GetMapping("/getAll")
	public List<Company> getCompany() {
		return companyService.getCompany();
	}
	
	@GetMapping("/getById/{companyId}")
	public Company getCompanyById(@Param(value="companyId") String companyId) {
		return companyService.getCompanyById(companyId);
	}
	
	@DeleteMapping("/deleteById/{companyId}")
	public int deleteCompanyById(@Param(value="companyId") String companyId) {
		return companyService.deleteCompanyById(companyId);
	}
	
	@PostMapping("/add")
	public int addCompany(@RequestBody Company company) {
		return companyService.addCompany(company);
	}
	
	@PutMapping("/modifyById/{companyId}")
	public int modifyCompanyById(@RequestBody Company company, @Param(value="companyId") String companyId) {
		Company c = new Company();
		c.setCompanyId(company.getCompanyId());
		c.setCompanyName(company.getCompanyName());
		c.setCompanyPhone(company.getCompanyPhone());
		c.setCompanyEmail(company.getCompanyEmail());
		c.setCompanyAddress(company.getCompanyAddress());
		
		c.setLinkMan(company.getLinkMan());
		c.setLinkEmail(company.getLinkEmail());
		c.setLinkPhone(company.getLinkPhone());
		c.setDepartment(company.getDepartment());
		c.setDuty(company.getDuty());
		
		c.setBankAccount(company.getBankAccount());
		c.setBankName(company.getBankName());
		c.setCurrency(company.getCurrency());
		return companyService.updateCompany(c, companyId);
	}

}
