package pers.lmw.reins.sys.backend.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import pers.lmw.reins.sys.backend.entity.Role;
import pers.lmw.reins.sys.backend.entity.User;

@Service
public interface UserService {
	// 登录判断
	public User login(User u);

	// 查询当前用户角色
	public Role queryRole(User u);

	// 获取所有用户信息
	public List<User> getAll();
	
	// 查看个人信息
	public User queryInfo(@Param("userId") String userId);

	// 修改个人信息
	public int updateMsg(User u);

	// 修改密码
	public int updatePwd(User u);
}
