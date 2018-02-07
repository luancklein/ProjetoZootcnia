package br.edu.ifc.concordia.inf.zoo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="stockCurrent")
@Table(name="stockCurrent")
public class StockCurrent implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String nameInput;
	private Double qtdInIFC = 0.0;
	private String date;
	private Double qtdExternalStorage = 0.0;
	private Double pricePerKg;
	public String getNameInput() {
		return nameInput;
	}
	public void setNameInput(String nameInput) {
		this.nameInput = nameInput;
	}
	public Double getQtdInIFC() {
		return qtdInIFC;
	}
	public void setQtdInIFC(Double qtdInIFC) {
		this.qtdInIFC = qtdInIFC;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Double getQtdExternalStorage() {
		return qtdExternalStorage;
	}
	public void setQtdExternalStorage(Double qtdExternalStorage) {
		this.qtdExternalStorage = qtdExternalStorage;
	}
	public Double getPricePerKg() {
		return pricePerKg;
	}
	public void setPricePerKg(Double pricePerKg) {
		this.pricePerKg = pricePerKg;
	}
	
}
