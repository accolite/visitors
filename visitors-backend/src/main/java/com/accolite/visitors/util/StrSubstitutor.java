package com.accolite.visitors.util;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StrSubstitutor {

	private Map<String, String> map;
	private static final Pattern p = Pattern.compile("\\$\\{(.+?)\\}");

	public StrSubstitutor(Map<String, String> map) {
		this.map = map;
	}

	public String replace(String str) {

		Matcher m = p.matcher(str);
		StringBuffer sb = new StringBuffer();
		while (m.find()) {
			String var = m.group(1);
			String replacement = "";
			if (map.containsKey(var))
				replacement = map.get(var);
			m.appendReplacement(sb, replacement);
		}
		m.appendTail(sb);

		return sb.toString();
	}

}
