package pers.lmw.reins.sys.backend.entity;

/**
 * 再保理赔
 * @author linmingwen
 * @date 2019年4月14日上午10:25:24
 */
public class ReinsClaim {
	private String claimeCode;					//理赔号
	private String companyName;					//再保公司
	private String claimSum;					//理赔金额
	private String contractName;				//合同名称
	private String status;						//理赔状态
	private String description;					//详细描述
	
	
	public String getClaimeCode() {
		return claimeCode;
	}
	public void setClaimeCode(String claimeCode) {
		this.claimeCode = claimeCode;
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
