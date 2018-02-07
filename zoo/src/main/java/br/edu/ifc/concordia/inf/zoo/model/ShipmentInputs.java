package br.edu.ifc.concordia.inf.zoo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="ShipmentsInputs")
@Table(name="ShipmentsInputs")
public class ShipmentInputs implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private Double qtd;
	private String dateArrive;
	private String year;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getQtd() {
		return qtd;
	}
	public void setQtd(Double qtd) {
		this.qtd = qtd;
	}
	public String getDateArrive() {
		return dateArrive;
	}
	public void setDateArrive(String dateArrive) {
		this.dateArrive = dateArrive;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	
}
