package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import pers.lmw.reins.sys.backend.entity.Contract;

/**
 * @author linmingwen
 * @date 2019年4月24日下午7:26:25
 */
@Mapper
public interface ContractMapper {

	@Select("select * from contractMsg")
	public List<Contract> getAllContract();
	
}
