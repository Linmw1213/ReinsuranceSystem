package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import pers.lmw.reins.sys.backend.entity.ReinsClaim;

@Mapper
public interface ReinsClaimMapper {

	@Select("select * from reins_claim")
	public List<ReinsClaim> getAll();

	@Insert("insert into reins_claim(claimCode,companyName,claimSum,contractName,description,status,contractType,companyAccount,currency,operator,createTime) "
			+ "values(#{claimCode},#{companyName},#{claimSum},#{contractName},#{description},#{status},#{contractType},#{companyAccount},#{currency},#{operator},#{createTime})")
	public int add(ReinsClaim rc);
	
	@Delete("delete from reins_claim where claimCode=#{claimCode}")
	public int delete(@Param("claimCode") String claimCode);
	
	@Select("SELECT COUNT(*) FROM reins_claim")
	public int count();
	
//@Update("update reins_claim set(companyName=#{companyName},)")
//public int update(ReinsClaim c);

}
