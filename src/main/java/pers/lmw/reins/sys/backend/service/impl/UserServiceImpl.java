package pers.lmw.reins.sys.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.dao.UserMapper;
import pers.lmw.reins.sys.backend.entity.Role;
import pers.lmw.reins.sys.backend.entity.User;
import pers.lmw.reins.sys.backend.entity.UserRole;
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
	public Role queryRole(String id) {
		return mapper.queryRole(id);
	}

	@Override
	public User queryInfo(String userId) {
		return mapper.queryInfo(userId);
	}

	@Override
	public int updateMsg(User u) {
		return mapper.updateMsg(u);
	}

	@Override
	public int updatePwd(User u) {
		return mapper.updatePwd(u);
	}

	@Override
	public List<User> getAll() {
		return mapper.getAll();
	}

	@Override
	public int deleteUser(String userId) {
		return mapper.deleteUser(userId);
	}

	@Override
	public int deleteRole(String uid) {
		return mapper.deleteRole(uid);
	}

	@Override
	public int addUser(User u) {
		return mapper.addUser(u);
	}

	@Override
	public int addRole(UserRole r) {
		return mapper.addRole(r);
	}

}
