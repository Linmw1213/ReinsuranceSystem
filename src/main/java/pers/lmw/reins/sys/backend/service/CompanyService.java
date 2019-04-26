package pers.lmw.reins.sys.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.dao.CompanyMapper;
import pers.lmw.reins.sys.backend.entity.Company;

@Service
public class CompanyService implements CompanyMapper{

	@Autowired CompanyMapper companyMapper;
	
	@Override
	public List<Company> getCompany() {
		return companyMapper.getCompany();
	}

	@Override
	public Company getCompanyById(String companyId) {
		return companyMapper.getCompanyById(companyId);
	}

	@Override
	public int deleteCompanyById(String companyId) {
		return companyMapper.deleteCompanyById(companyId);
	}

	@Override
	public int addCompany(Company company) {
		return companyMapper.addCompany(company);
	}

	@Override
	public int updateCompany(Company company, String companyId) {
		return companyMapper.updateCompany(company, companyId);
	}

}
