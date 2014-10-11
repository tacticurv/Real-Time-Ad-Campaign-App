package com.minions.rta.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@RequestMapping("/index")
	public String index(){
		
		return "NewFile.html";
	}
	
	@RequestMapping("/")
	public String HomePage(){
		
		return "index";
	}

}
