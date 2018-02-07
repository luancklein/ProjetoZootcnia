package br.edu.ifc.concordia.inf.zoo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="ForecastRation")
@Table(name="ForecastRation")
public class ForecastRation implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String nameInput;
	private Double totalOutput;
	public String getLastDate() {
		return lastDate;
	}
	public void setLastDate(String lastDate) {
		this.lastDate = lastDate;
	}
	private int qtdProdutions;
	private String firstDate;
	private String lastDate;
	

	public String getNameInput() {
		return nameInput;
	}
	public void setNameInput(String nameInput) {
		this.nameInput = nameInput;
	}
	public Double getTotalOutput() {
		return totalOutput;
	}
	public void setTotalOutput(Double totalOutput) {
		this.totalOutput = totalOutput;
	}
	public int getQtdProdutions() {
		return qtdProdutions;
	}
	public void setQtdProdutions(int qtdProdutions) {
		this.qtdProdutions = qtdProdutions;
	}
	public String getFirstDate() {
		return firstDate;
	}
	public void setFirstDate(String firstDate) {
		this.firstDate = firstDate;
	}
}
