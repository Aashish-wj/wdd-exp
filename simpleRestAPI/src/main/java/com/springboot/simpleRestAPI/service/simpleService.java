package com.springboot.simpleRestAPI.service;

import org.springframework.stereotype.Service;

@Service
public class simpleService {
	public String Welcome(String s) {
		String m ="Welcome" + s;
		return m;
	}
}
