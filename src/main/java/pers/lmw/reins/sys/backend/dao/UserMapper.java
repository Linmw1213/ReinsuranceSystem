package pers.lmw.reins.sys.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import pers.lmw.reins.sys.backend.entity.Role;
import pers.lmw.reins.sys.backend.entity.User;

@Mapper
public interface UserMapper {

	// 登录判断
	@Select("select * from user where userId=#{userId} and password=#{password}")
	public User login(User u);

	// 查询当前用户角色
	@Select("select r.role_name from user_role as ur left join user as u on u.userId=ur.uid left join role as r on r.id=ur.rid where userId=#{userId}")
	public Role queryRole(User u);

	// 获取所有用户信息
	@Select("select * from user,role,user_role where user.userId=user_role.uid and role.id=user_role.rid")
	public List<User> getAll();

	// 查看个人信息
	@Select("select * from user where userId=#{userId}")
	public User queryInfo(@Param("userId") String userId);

	// 修改个人信息
	@Update("update user set username=#{username},phone=#{phone},email=#{email},address=#{address},sex=#{sex} where userId=#{userId}")
	public int updateMsg(User u);

	// 修改密码
	@Update("update user set password=#{password} where userId=#{userId}")
	public int updatePwd(User u);

}
