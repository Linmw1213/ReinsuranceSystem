package pers.lmw.reins.sys.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.dao.ContractMapper;
import pers.lmw.reins.sys.backend.entity.CalculateData;
import pers.lmw.reins.sys.backend.entity.Contract;
import pers.lmw.reins.sys.backend.service.ContractService;

/**
 * @author linmingwen
 * @date 2019年5月1日下午10:23:14
 */
@Service
public class ContractServiceImpl implements ContractService{

	@Autowired
	ContractMapper mapper;

	@Override
	public List<Contract> getAllContract() {
		return mapper.getAllContract();
	}

	@Override
	public int addContract(Contract contract) {
		return mapper.addContract(contract);
	}

	@Override
	public int updateContract(Contract contract) {
		return mapper.updateContract(contract);
	}

	@Override
	public int deleteContract(String contractId) {
		return mapper.deleteContract(contractId);
	}

	@Override
	public List<String> getContractId() {
		return mapper.getContractId();
	}

	@Override
	public CalculateData getCalculateDataById(String contractId) {
		return mapper.getCalculateDataById(contractId);
	}

	@Override
	public Contract getBasicMsgById(String contractId) {
		return mapper.getBasicMsgById(contractId);
	}

	
}
