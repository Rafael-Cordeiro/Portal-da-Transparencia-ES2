package com.ssp.transparencia.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	@RequestMapping("/funcionarios")
	public String funcionarios() {
		return "funcionarios";
	}
	
	@RequestMapping("/historico")
	public String historico() {
		return "historico";
	}
}
