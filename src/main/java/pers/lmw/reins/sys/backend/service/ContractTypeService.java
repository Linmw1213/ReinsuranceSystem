package pers.lmw.reins.sys.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.entity.ContractType;

@Service
public interface ContractTypeService {

	public List<ContractType> getAllContractTypes();
}
