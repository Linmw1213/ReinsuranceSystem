package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import pers.lmw.reins.sys.backend.entity.CalculateData;

@Mapper
public interface CalculateDataMapper {

	@Select("select * from calculate_data")
	public List<CalculateData> getAll();

	@Insert("insert into calculate_data(contractId,insurance_expence,retention_ratio,retention,line_num,ceiling_top,pay,total) "
			+ "values(#{contractId},#{insurance_expence},#{retention_ratio},#{retention},#{line_num},#{ceiling_top},#{pay},#{total})")
	public int add(CalculateData cd);

	@Update("update set calculate_data(contractId=#{contractId},insurance_expence=#{insurance_expence},retention_ratio=#{retention_ratio},retention=#{retention},"
			+ "line_num=#{line_num},ceiling_top=#{ceiling_top},pay=#{pay},total=#{total}")
	public int modify(CalculateData data);

	@Delete("delete from calculate_data where contractId=#{contractId}")
	public int delete(@Param("contractId")String contractId);
	
}
