package pers.lmw.reins.sys.backend.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import pers.lmw.reins.sys.backend.entity.User;

@Mapper
public interface ForgotPwdMapper {
//	 where username=#{username} and phone=#{phone}

	@Select("select * from user where username='杜甫'")
	public User confirm(User u);
	
	@Update("update user set password=#{password} where username=#{username} and phone=#{phone}")
	public int reset(User u);
}
