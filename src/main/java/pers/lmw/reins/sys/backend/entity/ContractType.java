package pers.lmw.reins.sys.backend.entity;

/**
 * 合同类型
 * @author linmingwen
 * @date 2019年4月14日上午10:15:25
 */
public class ContractType {
	
	private String typeId;
	private String typeName;
	private String description;
	
	public String getTypeId() {
		return typeId;
	}
	public void setTypeId(String typeId) {
		this.typeId = typeId;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
