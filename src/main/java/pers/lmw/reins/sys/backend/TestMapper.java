package pers.lmw.reins.sys.backend;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import pers.lmw.reins.sys.backend.entity.Company;

@Mapper
public interface TestMapper {

	@Select("select * from company_msg")
	public List<Company> getCompanyMsg();
	
	@Select("select * from company_msg where companyId=#{companyId}")
	public Company getCompanyById(@Param("companyId") String companyId);
}
