package pers.lmw.reins.sys.backend.util;

import java.text.SimpleDateFormat;
import java.util.Date;

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
public class SetContractId {
	/**
	 * 测试main方法
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		
		int i = 1000;
		System.out.println(i+24);
		System.out.println(setContractId());
	}

	/**
	 * 获取字符串拼音的第一个字母
	 * 
	 * @param chinese
	 * @return
	 */
	public static String ToFirstChar(String chinese) {
		String pinyinStr = "";
		char[] newChar = chinese.toCharArray(); // 转为单个字符
		HanyuPinyinOutputFormat defaultFormat = new HanyuPinyinOutputFormat();
		defaultFormat.setCaseType(HanyuPinyinCaseType.LOWERCASE);
		defaultFormat.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
		for (int i = 0; i < newChar.length; i++) {
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
	 * 获取当前时间
	 * 
	 * @param
	 * @return
	 */
	public static String getCurrentDate() {
		SimpleDateFormat sdf = new SimpleDateFormat();
		sdf.applyPattern("yyyy-MM-dd");
		Date date = new Date();
		String currentDate = sdf.format(date);
		return currentDate;
	}
	
	public static String setContractId() {
		String id = ToFirstChar("友邦保险").toUpperCase() + getCurrentDate();
		return id;
	}

}