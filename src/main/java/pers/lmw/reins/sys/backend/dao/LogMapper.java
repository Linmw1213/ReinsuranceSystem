package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import pers.lmw.reins.sys.backend.entity.Company;
import pers.lmw.reins.sys.backend.entity.Contract;
import pers.lmw.reins.sys.backend.entity.ReinsClaim;
import pers.lmw.reins.sys.backend.entity.ReinsType;
import pers.lmw.reins.sys.backend.entity.User;

/**
 * 日志管理
 * 
 * @author linmingwen
 * @date 2019年5月8日下午5:11:04
 */
@Mapper
public interface LogMapper {

	/*
	 * 用户登录日志管理
	 */
	@Update("update user set loginTime=#{loginTime} where userId=#{userId}")
	public int setLoginTime(User u);

	@Select("select * from user,role,user_role where user.userId=user_role.uid and role.id=user_role.rid and loginTime is not null;")
	public List<User> getLoginTimeNotNull();

	@Update("update user set loginTime=null where userId=#{userId}")
	public int deleteLogByUserId(@Param(value = "userId") String userId);

	/*
	 * 公司管理日志
	 */
	@Select("select * from company_msg where createTime is not null")
	public List<Company> getCompanyLog();

	@Update("update company_msg set createTime=null,modifyTime=null where companyId=#{companyId}")
	public int deleteCompanyLog(@Param("companyId") String companyId);
	
	/*
	 * 合同管理日志
	 */
	@Select("select * from contract_msg where create_time is not null")
	public List<Contract> getContractLog();

	@Update("update contract_msg set create_time=null,modify_time=null where contractId=#{contractId}")
	public int deleteContractLog(@Param("contractId") String contractId);
	
	/*
	 * 险种管理日志
	 */
	@Select("select * from reins_type where create_time is not null")
	public List<ReinsType> getReinsTypeLog();

	@Update("update reins_type set create_time=null where typeId=#{typeId}")
	public int deleteReinsTypeLog(@Param("typeId") String typeId);
	
	/*
	 * 理赔管理日志
	 */
	@Select("select * from reins_claim")
	public List<ReinsClaim> getReinsClaimLog();

	@Update("update reins_claim set create_time=null where claimCode=#{claimCode}")
	public int deleteReinsClaimLog(@Param("claimCode") String claimCode);

}
