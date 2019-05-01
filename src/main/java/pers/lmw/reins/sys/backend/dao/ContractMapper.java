package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import pers.lmw.reins.sys.backend.entity.Contract;

/**
 * @author linmingwen
 * @date 2019年4月24日下午7:26:25
 */
@Mapper
public interface ContractMapper {

	@Select("select * from contract_msg")
	public List<Contract> getAllContract();
	
	@Insert("insert into contract_msg(contractId,contractName,contractTypeName,contractStatus,reinsTypeId,"
			+ "beginDate,stopDate,description,companyName,appendix,operator,create_time,modify_time) "
			+ "values(#{contractId},#{contractName},#{contractTypeName},#{contractStatus},#{reinsTypeId},"
			+ "#{beginDate},#{stopDate},#{description},#{companyName},#{appendix},#{operator},#{create_time},#{modify_time})")
	public int addContract(Contract contract);
	
	@Update("update contract_msg set contractName=#{contractName},contractTypeName=#{contractTypeName},contractStatus=#{contractStatus},reinsTypeId=#{reinsTypeId},"
			+ "beginDate=#{degeinDate},stopDate=#{stopDate},description=#{description},companyName={companyName},appendix=#{appendix},operator=#{operator},create_time=#{create_time},"
			+ "modify_time=#{modify_time} where contractId=?)")
	public int updateContract(@Param("contractId") String contractId);
	
	@Delete("delete from contract_msg where contractId=?")
	public int deleteContract(@Param("contractId") String contractId);
	
}
