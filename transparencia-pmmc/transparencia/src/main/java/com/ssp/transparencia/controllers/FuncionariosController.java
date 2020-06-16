package com.ssp.transparencia.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ssp.transparencia.models.Funcionario;
import com.ssp.transparencia.repository.FuncionarioRepository;

@RestController
public class FuncionariosController {
	
	@Autowired
	private FuncionarioRepository fr;
	
	@RequestMapping(value = "/funcionarioAJAX", produces = "application/json", method=RequestMethod.GET)
	public Iterable<Funcionario>  funcionarioAJAX() {
		Iterable<Funcionario> funcionarios = fr.findAll();
		return funcionarios;
	}
}
