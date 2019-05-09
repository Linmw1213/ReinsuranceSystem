package pers.lmw.reins.sys.backend.entity;

/**
 * 合同信息
 * 
 * @author linmingwen
 * @date 2019年4月13日下午9:09:59
 */
public class Contract {

	private int id;
	private String contractId;
	private String contractName;
	private String companyName;
	private String contractTypeName;
	private String contractStatus;
	private String reinsTypeName;
	private String description;
	private String appendix;
	private String beginDate;
	private String stopDate;
	private String operator;
	private String create_time;
	private String modify_time;

	private double total;
	private double insurance_expence;
	private double retention_ratio;
	private double retention;
	private int line_num;
	private double ceiling_top;
	private double pay;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getReinsTypeName() {
		return reinsTypeName;
	}

	public void setReinsTypeName(String reinsTypeName) {
		this.reinsTypeName = reinsTypeName;
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

	public String getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}

	public String getOperator() {
		return operator;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

	public String getStopDate() {
		return stopDate;
	}

	public void setStopDate(String stopDate) {
		this.stopDate = stopDate;
	}

	public String getCreate_time() {
		return create_time;
	}

	public void setCreate_time(String create_time) {
		this.create_time = create_time;
	}

	public String getModify_time() {
		return modify_time;
	}

	public void setModify_time(String modify_time) {
		this.modify_time = modify_time;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public double getInsurance_expence() {
		return insurance_expence;
	}

	public void setInsurance_expence(double insurance_expence) {
		this.insurance_expence = insurance_expence;
	}

	public double getRetention_ratio() {
		return retention_ratio;
	}

	public void setRetention_ratio(double retention_ratio) {
		this.retention_ratio = retention_ratio;
	}

	public double getRetention() {
		return retention;
	}

	public void setRetention(double retention) {
		this.retention = retention;
	}

	public int getLine_num() {
		return line_num;
	}

	public void setLine_num(int line_num) {
		this.line_num = line_num;
	}

	public double getCeiling_top() {
		return ceiling_top;
	}

	public void setCeiling_top(double ceiling_top) {
		this.ceiling_top = ceiling_top;
	}

	public double getPay() {
		return pay;
	}

	public void setPay(double pay) {
		this.pay = pay;
	}

}
