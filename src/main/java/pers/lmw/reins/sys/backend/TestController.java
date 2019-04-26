package pers.lmw.reins.sys.backend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pers.lmw.reins.sys.backend.entity.Company;
import pers.lmw.reins.sys.backend.entity.Test;

@CrossOrigin(origins = {"http://localhost:4200","null"})
@RestController
@RequestMapping(value="/api")
public class TestController {
	List<Test> list = new ArrayList<Test>();
	
	@Autowired
	TestMapper mapper;

	@GetMapping("/hello")
	public List<Company> hello() {
		return mapper.getCompanyMsg();
	}
	
	@GetMapping("/test/{companyId}")
	public Company getCompanyById(@PathVariable String companyId) {
//		companyId = "1001";
		return mapper.getCompanyById(companyId);
	}
	
	@PostMapping(value="/test/is")
	public Test test(@RequestBody(required=false) Test test) {

		list.add(test);
		return test;
	}
}
