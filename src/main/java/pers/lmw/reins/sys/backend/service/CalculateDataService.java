package pers.lmw.reins.sys.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.entity.CalculateData;

@Service
public interface CalculateDataService {

	public List<CalculateData> getAll();
	
	public int add(CalculateData cd);
	
	public int modify(CalculateData data);
	
	public int delete(String contractId);
}
