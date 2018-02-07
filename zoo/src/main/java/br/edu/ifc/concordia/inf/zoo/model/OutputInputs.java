package br.edu.ifc.concordia.inf.zoo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="OutputInputs")
@Table(name="OutputInputs")
public class OutputInputs implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String nameProdution;
	private String nameInput;
	private String animal;
	private Double qtd;
	private String date;
	private String year;
	private Long idProd;
	
	public Long getIdProd() {
		return idProd;
	}
	public void setIdProd(Long idProd) {
		this.idProd = idProd;
	}
	String getNameProdution() {
		return nameProdution;
	}
	public void setNameProdution(String nameProdution) {
		this.nameProdution = nameProdution;
	}
	public String getAnimal() {
		return animal;
	}
	public void setAnimal(String animal) {
		this.animal = animal;
	}
	public Double getQtd() {
		return qtd;
	}
	public void setQtd(Double qtd) {
		this.qtd = qtd;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getNameInput() {
		return nameInput;
	}
	public void setNameInput(String nameInput) {
		this.nameInput = nameInput;
	}
	

}
