package com.ssp.transparencia.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class HistoricoSalarios {
	
	@Id
	private long id;
	@NotNull
	@ManyToOne
	@JoinColumn(name="funcionario_rgf")
	private Funcionario funcionario;
	@NotNull
	private String ref;
	@NotNull
	private double rendimentos;
	
	
	public Funcionario getFuncionario() {
		return funcionario;
	}
	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}
	public String getRef() {
		return ref;
	}
	public void setRef(String ref) {
		this.ref = ref;
	}
	public double getRendimentos() {
		return rendimentos;
	}
	public void setRendimentos(double rendimentos) {
		this.rendimentos = rendimentos;
	}
	
	
}
