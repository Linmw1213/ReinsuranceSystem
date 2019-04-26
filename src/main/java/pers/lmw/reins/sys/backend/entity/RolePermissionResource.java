package pers.lmw.reins.sys.backend.entity;

/**
 * 角色权限资源类
 * @author linmingwen
 * @date 2019年4月14日上午10:47:23
 */
public class RolePermissionResource {

	private int roleId;
	private int permissionId;
	private int resourceId;
	
	
	public int getPermissionId() {
		return permissionId;
	}
	public void setPermissionId(int permissionId) {
		this.permissionId = permissionId;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	public int getResourceId() {
		return resourceId;
	}
	public void setResourceId(int resourceId) {
		this.resourceId = resourceId;
	}
	
}
