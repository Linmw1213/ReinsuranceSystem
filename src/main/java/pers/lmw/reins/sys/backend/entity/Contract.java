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
	private String reinsCompanyName;
	private String contractStatus;
	private String contractTypeName;
	private String contractAppendix;
	private Date beginDate;
	private Date endDate;
	private String linfenType;
	private String description;
	private double retention;
	private double splitAmount;
	private double ceilingTop;
	private double riskUnit;
	private int lineNum;
	private double contractLimit;
	
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
	public String getReinsCompanyName() {
		return reinsCompanyName;
	}
	public void setReinsCompanyName(String reinsCompanyName) {
		this.reinsCompanyName = reinsCompanyName;
	}
	public String getContractStatus() {
		return contractStatus;
	}
	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}
	public String getContractTypeName() {
		return contractTypeName;
	}
	public void setContractTypeName(String contractTypeName) {
		this.contractTypeName = contractTypeName;
	}
	public String getContractAppendix() {
		return contractAppendix;
	}
	public void setContractAppendix(String contractAppendix) {
		this.contractAppendix = contractAppendix;
	}
	public Date getBeginDate() {
		return beginDate;
	}
	public void setBeginDate(Date beginDate) {
		this.beginDate = beginDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getLinfenType() {
		return linfenType;
	}
	public void setLinfenType(String linfenType) {
		this.linfenType = linfenType;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getRetention() {
		return retention;
	}
	public void setRetention(double retention) {
		this.retention = retention;
	}
	public double getSplitAmount() {
		return splitAmount;
	}
	public void setSplitAmount(double splitAmount) {
		this.splitAmount = splitAmount;
	}
	public double getCeilingTop() {
		return ceilingTop;
	}
	public void setCeilingTop(double ceilingTop) {
		this.ceilingTop = ceilingTop;
	}
	public double getRiskUnit() {
		return riskUnit;
	}
	public void setRiskUnit(double riskUnit) {
		this.riskUnit = riskUnit;
	}
	public int getLineNum() {
		return lineNum;
	}
	public void setLineNum(int lineNum) {
		this.lineNum = lineNum;
	}
	public double getContractLimit() {
		return contractLimit;
	}
	public void setContractLimit(double contractLimit) {
		this.contractLimit = contractLimit;
	}
}
