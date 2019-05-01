package pers.lmw.reins.sys.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.dao.CompanyMapper;
import pers.lmw.reins.sys.backend.entity.Company;
import pers.lmw.reins.sys.backend.service.CompanyService;

/**
 * @author linmingwen
 * @date 2019年4月27日下午7:17:17
 */
@Service
public class CompanyServiceImpl implements CompanyService {
	
	@Autowired
	CompanyMapper companyMapper;

	/** 获取所有公司 */
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
	public int updateCompany(Company company) {
		return companyMapper.updateCompany(company);
	}

}
