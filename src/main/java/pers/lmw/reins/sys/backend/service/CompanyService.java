package pers.lmw.reins.sys.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.entity.Company;

@Service
public interface CompanyService {
	
	public List<Company> getCompany();

	public Company getCompanyById(String companyId);

	public int deleteCompanyById(String companyId);

	public int addCompany(Company company);

	public int updateCompany(Company company);

	
}
