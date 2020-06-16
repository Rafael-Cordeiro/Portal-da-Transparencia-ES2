package com.ssp.transparencia.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Funcionario {
	@Id
	private String rgf;
	@NotNull
	private String nome;
	@NotNull
	private String cargo;
	@NotNull
	private double rendimentos;
	
	@Override
	public String toString() {
		return '{' +
					"\"" + "rgf" + "\"" + ":" + "\"" + rgf + "\"" + ',' +
					"\"" + "nome" + "\"" + ":" + "\"" + nome + "\"" + ',' +
					"\"" + "cargo" + "\"" + ":" + "\"" + cargo + "\"" + ',' +
					"\"" + "rendimentos" + "\"" + ":" + rendimentos +
				'}';
	}
	
	
	public String getRgf() {
		return rgf;
	}
	public void setRgf(String rgf) {
		this.rgf = rgf;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCargo() {
		return cargo;
	}
	public void setCargo(String cargo) {
		this.cargo = cargo;
	}
	public double getRendimentos() {
		return rendimentos;
	}
	public void setRendimentos(double rendimentos) {
		this.rendimentos = rendimentos;
	}	
}
