package pers.lmw.reins.sys.backend.entity;

/**
 * 再保理赔
 * @author linmingwen
 * @date 2019年4月14日上午10:25:24
 */
public class ReinsClaim {
	private String claimCode;					//理赔号
	private String claimSum;					//理赔金额

	private String companyName;					//再保公司
	private String companyAccount;
	private String currency;
	
	private String contractName;				//合同名称
	private String contractType;
	
	private String operator;
	private String createTime;
	private String modifyTime;
	
	private String status;						//理赔状态
	private String description;	
		
	public String getCompanyAccount() {
		return companyAccount;
	}
	public void setCompanyAccount(String companyAccount) {
		this.companyAccount = companyAccount;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public String getContractType() {
		return contractType;
	}
	public void setContractType(String contractType) {
		this.contractType = contractType;
	}
	public String getOperator() {
		return operator;
	}
	public void setOperator(String operator) {
		this.operator = operator;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public String getModifyTime() {
		return modifyTime;
	}
	public void setModifyTime(String modifyTime) {
		this.modifyTime = modifyTime;
	}			
	
	public String getClaimCode() {
		return claimCode;
	}
	public void setClaimCode(String claimCode) {
		this.claimCode = claimCode;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getClaimSum() {
		return claimSum;
	}
	public void setClaimSum(String claimSum) {
		this.claimSum = claimSum;
	}
	public String getContractName() {
		return contractName;
	}
	public void setContractName(String contractName) {
		this.contractName = contractName;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
