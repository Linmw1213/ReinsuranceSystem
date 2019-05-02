package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import pers.lmw.reins.sys.backend.entity.ContractType;

@Mapper
public interface ContractTypeMapper {
	
	@Select("select * from contract_type")
	public List<ContractType> getAllContractTypes();

}
