package pers.lmw.reins.sys.backend.entity;

/**
 * 用户角色类
 * @author linmingwen
 * @date 2019年4月14日上午10:49:37
 */
public class UserRole {
	private int userId;
	private int roleId;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

}
