package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import pers.lmw.reins.sys.backend.entity.CalculateData;
import pers.lmw.reins.sys.backend.entity.Contract;

/**
 * @author linmingwen
 * @date 2019年4月24日下午7:26:25
 */
@Mapper
public interface ContractMapper {

	@Select("select * from contract_msg")
	public List<Contract> getAllContract();

	@Insert("insert into contract_msg(contractId,contractName,contractTypeName,contractStatus,reinsTypeName,"
			+ "beginDate,stopDate,description,companyName,appendix,insurance_expence,retention_ratio,retention,"
			+ "line_num,ceiling_top,pay,total,operator,create_time) "
			+ "values(#{contractId},#{contractName},#{contractTypeName},#{contractStatus},#{reinsTypeName},"
			+ "#{beginDate},#{stopDate},#{description},#{companyName},#{appendix},#{insurance_expence},#{retention_ratio},#{retention},"
			+ "#{line_num},#{ceiling_top},#{pay},#{total},#{operator},#{create_time})")
	public int addContract(Contract contract);
	
	@Update("update contract_msg set contractName=#{contractName},contractTypeName=#{contractTypeName},reinsTypeName=#{reinsTypeName},"
			+ "beginDate=#{beginDate},stopDate=#{stopDate},description=#{description},insurance_expence=#{insurance_expence},retention_ratio=#{retention_ratio},retention=#{retention},"
			+ "line_num=#{line_num},ceiling_top=#{ceiling_top},pay=#{pay},total=#{total},operator=#{operator},modify_time=#{modify_time} where id=#{id}")
	public int updateContract(Contract contract);

	@Delete("delete from contract_msg where contractId=#{contractId}")
	public int deleteContract(@Param("contractId") String contractId);
	
	@Update("update contract_msg set contractName=#{contractName},contractTypeName=#{contractTypeName},reinsTypeName=#{reinsTypeName},description=#{description},appendix=#{appendix},beginDate=#{beginDate},stopDate=#{stopDate},operator=#{operator},"
			+ "modify_time=#{modify_time},insurance_expence=#{insurance_expence},retention_ratio=#{retention_ratio},retention=#{retention},line_num=#{line_num},ceiling_top=#{ceiling_top},pay=#{pay},total=#{total} where contractId=#{contractId}")
	public int test(Contract contract);
	
	@Select("select contractId from contract_msg")
	public List<String> getContractId();
	
	@Select("select total,insurance_expence,retention_ratio,retention,line_num,ceiling_top,pay from contract_msg where contractId=#{contractId}")
	public CalculateData getCalculateDataById(@Param("contractId") String contractId);
	
	@Select("select * from contract_Msg where contractId=#{contractId}")
	public Contract getBasicMsgById(@Param("contractId") String contractId);
}
