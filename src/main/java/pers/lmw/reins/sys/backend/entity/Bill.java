package pers.lmw.reins.sys.backend.entity;

import java.util.Date;

/**
 * 账单类
 * @author linmingwen
 * @date 2019年4月14日上午10:31:45
 */
public class Bill {
	private int billNum;
	private String contractName;
	private String companyName;
	private Date billDateTime;
	private String currency;
	
	
	public int getBillNum() {
		return billNum;
	}
	public void setBillNum(int billNum) {
		this.billNum = billNum;
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
	public Date getBillDateTime() {
		return billDateTime;
	}
	public void setBillDateTime(Date billDateTime) {
		this.billDateTime = billDateTime;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	

}
