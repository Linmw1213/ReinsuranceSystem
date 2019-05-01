package pers.lmw.reins.sys.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.dao.UserMapper;
import pers.lmw.reins.sys.backend.entity.Role;
import pers.lmw.reins.sys.backend.entity.User;
import pers.lmw.reins.sys.backend.service.UserService;

/**
 * @author linmingwen
 * @date 2019年4月30日下午6:17:44
 */
@Service
public class UserServiceImpl implements UserService {
	@Autowired UserMapper mapper;

	@Override
	public User login(User u) {
		return mapper.login(u);
	}

	@Override
	public Role queryRole(User u) {
		return mapper.queryRole(u);
	}

	@Override
	public User queryInfo(String userId) {
		return mapper.queryInfo(userId);
	}

	@Override
	public int updateMsg(String userId) {
		return mapper.updateMsg(userId);
	}

	@Override
	public int updatePwd(String userId) {
		return mapper.updatePwd(userId);
	}

}
