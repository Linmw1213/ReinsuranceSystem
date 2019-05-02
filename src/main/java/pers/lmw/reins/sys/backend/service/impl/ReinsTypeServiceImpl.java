package pers.lmw.reins.sys.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.dao.ReinsTypeMapper;
import pers.lmw.reins.sys.backend.entity.ReinsType;
import pers.lmw.reins.sys.backend.service.ReinsTypeService;

@Service
public class ReinsTypeServiceImpl implements ReinsTypeService {

	@Autowired
	ReinsTypeMapper mapper;

	@Override
	public List<ReinsType> getAllReinsTypes() {
		return mapper.getAllReinsTypes();
	}

	@Override
	public int addReinsType(ReinsType type) {
		return mapper.addReinsType(type);
	}

	@Override
	public int deleteReinsType(String typeId) {
		return mapper.deleteReinsType(typeId);
	}
}
