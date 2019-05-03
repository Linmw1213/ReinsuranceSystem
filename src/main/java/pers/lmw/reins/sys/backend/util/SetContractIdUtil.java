package pers.lmw.reins.sys.backend.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import org.springframework.stereotype.Component;

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;

/**
 * 汉字转换为拼音
 * 
 * @author Red
 */
@Component
public class SetContractIdUtil {
	/**
	 * 测试main方法
	 * 
	 * @param args
	 */
	public static void main(String[] args) {

		int i = 1000;
		System.out.println(i + 24);
//		System.out.println(setContractId(""));
		
		System.out.println(System.currentTimeMillis());
		
	}

	/**
	 * 获取字符串拼音的第一个字母
	 * 
	 * @param chinese
	 * @return
	 */
	public String ToFirstChar(String chinese) {
		String pinyinStr = "";
		char[] newChar = chinese.toCharArray(); // 转为单个字符
		HanyuPinyinOutputFormat defaultFormat = new HanyuPinyinOutputFormat();
		defaultFormat.setCaseType(HanyuPinyinCaseType.LOWERCASE);
		defaultFormat.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
		for (int i = 0; i < 4; i++) {
			if (newChar[i] > 128) {
				try {
					pinyinStr += PinyinHelper.toHanyuPinyinStringArray(newChar[i], defaultFormat)[0].charAt(0);
				} catch (BadHanyuPinyinOutputFormatCombination e) {
					e.printStackTrace();
				}
			} else {
				pinyinStr += newChar[i];
			}
		}
		return pinyinStr;
	}

	/**
	 * 获取当前时间&随机数
	 * 
	 * @param
	 * @return
	 */
	public String getCurrentTime() {
		SimpleDateFormat sdf = new SimpleDateFormat();
		Date date = new Date();
		sdf.applyPattern("yyyyMMddHHmmss");
		String currentTime = sdf.format(date);
		Random random = new Random();
		int num = (int)(random.nextDouble()*(9999-1000+1))+1000;
		return currentTime+num;
	}
	
	// 设置合同编号
	public String generate(String companyName) {
		String id = ToFirstChar(companyName).toUpperCase() + getCurrentTime();
		return id;
	}


}