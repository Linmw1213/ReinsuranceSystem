package pers.lmw.reins.sys.backend.service;

import java.util.List;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.entity.ReinsType;


/**
 * @author linmingwen
 * @date 2019年5月2日下午1:03:29
 */
@Service
public interface ReinsTypeService {

	public List<ReinsType> getAllReinsTypes();
	
	public int addReinsType(ReinsType type);
	
	public int deleteReinsType(String typeId);
}
