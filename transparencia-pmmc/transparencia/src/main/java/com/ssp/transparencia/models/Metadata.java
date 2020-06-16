package com.ssp.transparencia.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Metadata {
	
	@Id
	private long id;
	private String refAtual;
	private String refAnterior;
	private int qtdeHist;
	private int qtdeRgf;
	
	public String getRefAtual() {
		return refAtual;
	}
	public void setRefAtual(String refAtual) {
		this.refAtual = refAtual;
	}
	public String getRefAnterior() {
		return refAnterior;
	}
	public void setRefAnterior(String refAnterior) {
		this.refAnterior = refAnterior;
	}
	public int getQtdeHist() {
		return qtdeHist;
	}
	public void setQtdeHist(int qtdeHist) {
		this.qtdeHist = qtdeHist;
	}
	public int getQtdeRgf() {
		return qtdeRgf;
	}
	public void setQtdeRgf(int qtdeRgf) {
		this.qtdeRgf = qtdeRgf;
	}
	
}
