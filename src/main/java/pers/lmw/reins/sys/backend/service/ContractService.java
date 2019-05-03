package pers.lmw.reins.sys.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;
import pers.lmw.reins.sys.backend.entity.Contract;

/**
 * @author linmingwen
 * @date 2019年5月1日下午10:22:36
 */
@Service
public interface ContractService {

	public List<Contract> getAllContract();

	public int addContract(Contract contract);

	public int updateContract(Contract contract);

	public int deleteContract(String contractId);

	public int countContract(Contract contract);
}
