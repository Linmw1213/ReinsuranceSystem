package pers.lmw.reins.sys.backend.entity;

/**
 * 资源类（菜单）
 * @author linmingwen
 * @date 2019年4月14日上午10:30:27
 */
public class Resource {
	private int resourceId;
	private String resourceName;
	private String description;
	
	public int getResourceId() {
		return resourceId;
	}
	public void setResourceId(int resourceId) {
		this.resourceId = resourceId;
	}
	public String getResourceName() {
		return resourceName;
	}
	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
