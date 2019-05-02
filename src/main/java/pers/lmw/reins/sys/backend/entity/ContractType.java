package pers.lmw.reins.sys.backend.entity;

/**
 * 合同类型
 * @author linmingwen
 * @date 2019年4月14日上午10:15:25
 */
public class ContractType {
	
	private String contractTypeId;
	private String contractTypeName;
	private String description;
	
	public String getContractTypeId() {
		return contractTypeId;
	}
	public void setContractTypeId(String contractTypeId) {
		this.contractTypeId = contractTypeId;
	}
	public String getContractTypeName() {
		return contractTypeName;
	}
	public void setContractTypeName(String contractTypeName) {
		this.contractTypeName = contractTypeName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
