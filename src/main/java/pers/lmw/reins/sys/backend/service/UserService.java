package pers.lmw.reins.sys.backend.service;

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

	// 查看个人信息
	public User queryInfo(@Param("userId") String userId);

	// 修改个人信息
	public int updateMsg(@Param("userId") String userId);

	// 修改密码
	public int updatePwd(@Param("userId") String userId);
}
