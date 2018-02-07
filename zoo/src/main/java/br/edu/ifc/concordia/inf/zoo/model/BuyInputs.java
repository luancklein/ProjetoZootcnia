package br.edu.ifc.concordia.inf.zoo.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="BuyInputs")
@Table(name="BuyInputs")
public class BuyInputs  implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String dateBuy;
	private Double qtdBuy;
	private Double priceTotal;
	private String year;
	private Double pricePerKg;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDateBuy() {
		return dateBuy;
	}
	public void setDateBuy(String dateBuy) {
		this.dateBuy = dateBuy;
	}
	public Double getQtdBuy() {
		return qtdBuy;
	}
	public void setQtdBuy(Double qtdBuy) {
		this.qtdBuy = qtdBuy;
	}
	public Double getPriceTotal() {
		return priceTotal;
	}
	public void setPriceTotal(Double priceTotal) {
		this.priceTotal = priceTotal;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public Double getPricePerKg() {
		return pricePerKg;
	}
	public void setPricePerKg(Double pricePerKg) {
		this.pricePerKg = pricePerKg;
	}
}
