package pers.lmw.reins.sys.backend.dao;

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
	@Select("select r.name from user_role as ur "
			+ "left join user as u on u.userId=ur.uid "
			+ "left join role as r on r.id=ur.rid "
			+ "where userId=#{userId}")
	public Role queryRole(User u);
	
	//查看个人信息
	@Select("select * from user where userId=#{userId}")
	public User queryInfo(@Param("userId") String userId);

	//修改个人信息
	@Update("update user set username=#{username},userPhone=#{userPhone},userEmail=#{userEmail} where userId=#{userId}")
	public int updateMsg(@Param("userId") String userId);
	
	//修改密码
	@Update("update user set password=#{password} where userId=#{userId}")
	public int updatePwd(@Param("userId") String userId);
	
}
