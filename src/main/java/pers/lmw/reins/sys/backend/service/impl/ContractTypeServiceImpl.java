package pers.lmw.reins.sys.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.dao.ContractTypeMapper;
import pers.lmw.reins.sys.backend.entity.ContractType;
import pers.lmw.reins.sys.backend.service.ContractTypeService;

@Service
public class ContractTypeServiceImpl implements ContractTypeService {

	@Autowired
	ContractTypeMapper mapper;
	
	@Override
	public List<ContractType> getAllContractTypes() {
		return mapper.getAllContractTypes();
	}

}
