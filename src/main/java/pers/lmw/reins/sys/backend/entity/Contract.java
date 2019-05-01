package pers.lmw.reins.sys.backend.entity;

import java.util.Date;

/**
 *	合同信息
 * @author linmingwen
 * @date 2019年4月13日下午9:09:59
 */
public class Contract {
	
	private String contractId;
	private String contractName;
	private String companyName;
	private String contractTypeName;
	private String contractStatus;
	private String reinsTypeId;
	private String description;
	private String appendix;
	private Date beginDate;
	private Date stopDate;
	private String operator;
	private Date create_time;
	private Date modify_time;
	public String getContractId() {
		return contractId;
	}
	public void setContractId(String contractId) {
		this.contractId = contractId;
	}
	public String getContractName() {
		return contractName;
	}
	public void setContractName(String contractName) {
		this.contractName = contractName;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getContractTypeName() {
		return contractTypeName;
	}
	public void setContractTypeName(String contractTypeName) {
		this.contractTypeName = contractTypeName;
	}
	public String getContractStatus() {
		return contractStatus;
	}
	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}
	public String getReinsTypeId() {
		return reinsTypeId;
	}
	public void setReinsTypeId(String reinsTypeId) {
		this.reinsTypeId = reinsTypeId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAppendix() {
		return appendix;
	}
	public void setAppendix(String appendix) {
		this.appendix = appendix;
	}
	public Date getBeginDate() {
		return beginDate;
	}
	public void setBeginDate(Date beginDate) {
		this.beginDate = beginDate;
	}
	public Date getEndDate() {
		return stopDate;
	}
	public void setEndDate(Date endDate) {
		this.stopDate = endDate;
	}
	public String getOperator() {
		return operator;
	}
	public void setOperator(String operator) {
		this.operator = operator;
	}
	public Date getCreate_time() {
		return create_time;
	}
	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}
	public Date getModify_time() {
		return modify_time;
	}
	public void setModify_time(Date modify_time) {
		this.modify_time = modify_time;
	}

}
