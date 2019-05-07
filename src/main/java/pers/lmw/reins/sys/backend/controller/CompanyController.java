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

import pers.lmw.reins.sys.backend.entity.Company;
import pers.lmw.reins.sys.backend.service.CompanyService;

@CrossOrigin(origins = { "http://localhost:4200", "null" })
@RestController
@RequestMapping(value = "/company")
public class CompanyController {

	@Autowired
	CompanyService companyService;

	@GetMapping("/getAll")
	public List<Company> getCompany() {
		return companyService.getCompany();
	}

	@GetMapping("/getById/{companyId}")
	public Company getCompanyById(@PathVariable(value = "companyId") String companyId) {
		return companyService.getCompanyById(companyId);
	}

	@DeleteMapping("/deleteById/{companyId}")
	public void deleteCompanyById(@PathVariable(value = "companyId") String companyId) {
		companyService.deleteCompanyById(companyId);
	}

	@PostMapping("/add")
	public int addCompany(@RequestBody Company company) {
		return companyService.addCompany(company);
	}

	@PutMapping("/modifyById")
	public int modifyCompanyById(@RequestBody Company company) {
		return companyService.updateCompany(company);
	}

}
