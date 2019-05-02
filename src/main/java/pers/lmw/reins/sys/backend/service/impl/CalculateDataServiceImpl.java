package pers.lmw.reins.sys.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.dao.CalculateDataMapper;
import pers.lmw.reins.sys.backend.entity.CalculateData;
import pers.lmw.reins.sys.backend.service.CalculateDataService;

/**
 * @author linmingwen
 * @date 2019年5月2日下午1:39:10
 */
@Service
public class CalculateDataServiceImpl implements CalculateDataService{

	@Autowired
	CalculateDataMapper mapper;

	@Override
	public List<CalculateData> getAll() {
		return mapper.getAll();
	}

	@Override
	public int add(CalculateData cd) {
		return mapper.add(cd);
	}

	@Override
	public int modify(CalculateData data) {
		return mapper.modify(data);
	}

	@Override
	public int delete(String contractId) {
		return mapper.delete(contractId);
	}
	
}
