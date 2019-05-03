package pers.lmw.reins.sys.backend.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class TransferTimeUtil {
	public static void main(String[] args) {
//		System.out.println(stampToDate("1557849600000"));
//		System.out.print(getCurrentTime());
	}

    public String stampToDate(String s){
        String res;
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        long lt = new Long(s);
        Date date = new Date(lt);
        res = simpleDateFormat.format(date);
        return res;
    }
    
    public String getCurrentTime() {
    	SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        long lt = new Long(System.currentTimeMillis());
        Date date = new Date(lt);
    	return simpleDateFormat.format(date);
    }
}
