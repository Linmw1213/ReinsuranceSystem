package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import pers.lmw.reins.sys.backend.entity.ReinsType;

@Mapper
public interface ReinsTypeMapper {

	@Select("select * from reins_type")
	public List<ReinsType> getAllReinsTypes();

	@Insert("insert into reins_type(typeId,typeName,description,operator,operatorId,create_time)"
			+ " values(#{typeId},#{typeName},#{description},#{operator},#{operatorId},#{create_time})")
	public int addReinsType(ReinsType type);

	@Delete("delete from reins_type where typeId=#{typeId}")
	public int deleteReinsType(@Param("typeId") String typeId);
}
