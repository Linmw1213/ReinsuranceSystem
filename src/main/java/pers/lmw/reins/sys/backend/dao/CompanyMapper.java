package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import pers.lmw.reins.sys.backend.entity.Company;

/**
 * @author linmingwen
 * @date 2019年4月14日上午11:14:26
 */
@Mapper
public interface CompanyMapper {

	@Select("select * from company_msg")
	public List<Company> getCompany();

	@Select("select * from company_msg where companyId=#{companyId}")
	public Company getCompanyById(@Param("companyId") String companyId);

	@Delete("delete * from company_msg where companyId=#{companyId}")
	public int deleteCompanyById(@Param("companyId") String companyId);

	@Insert("insert into company_msg(companyId,companyName,companyAddress,companyEmail,companyPhone,"
			+ "linkMan,linkPhone,linkEmail,department,duty,bankAccount,bankName,currency) "
			+ "values(#{companyId},#{companyName},#{companyAddress},#{companyEmail},#{companyPhone,},"
			+ "#{linkMan},#{linkPhone},#{linkEmail},#{department},#{duty},#{bankAccount},#{bankName},#{currency})")
	public int addCompany(Company company);

	// 修改公司信息
	@Update("update company_msg set companyId=#{companyId},companyName=#{companyName},companyPhone=#{companyPhone},companyEmail=#{companyEmail},companyAddress=#{companyAddress}"
			+ "linkMan=#{linkMan},linkPhone=#{linkPhone},linkEmail=#{linkEmail},department=#{department},duty=#{duty}"
			+ "bankAccount=#{bankAccount},bankName=#{bankName},currency=#{currency} where companyId=#{companyId}")
	public int updateCompany(Company company, @Param("companyId") String companyId);
}
