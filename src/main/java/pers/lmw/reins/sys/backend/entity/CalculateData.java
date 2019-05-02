package pers.lmw.reins.sys.backend.entity;

/**再保计算数据
 * @author linmingwen
 * @date 2019年5月2日下午1:20:23
 */
public class CalculateData {
	
	  private String contractId;
	  private double total;
	  private double insurance_expence;
	  private double retention_ratio;
	  private double retention;
	  private int line_num;
	  private double ceiling_top;
	  private double pay;
	  
	public String getContractId() {
		return contractId;
	}
	public void setContractId(String contractId) {
		this.contractId = contractId;
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
