package com.springboot.simpleRestAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.simpleRestAPI.service.simpleService;

@RestController
@RequestMapping
public class simpleController {
	@Autowired
	simpleService ss;
@GetMapping("/index")
	public String Welcome(@RequestParam String msg) {
		return ss.Welcome(msg);
	}
}
