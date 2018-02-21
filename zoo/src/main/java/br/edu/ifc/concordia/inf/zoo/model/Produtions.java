package br.edu.ifc.concordia.inf.zoo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="produtions")
@Table(name="prodution")
public class Produtions implements Serializable{
	
private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	public Long getId() {
		return id;
	}
	private String type_animal;
	private Double insumo1 = 0.0;
	private Double insumo2 = 0.0;
	private Double insumo3 = 0.0;
	private Double insumo4 = 0.0;
	private Double insumo5 = 0.0;;
	private Double insumo6 = 0.0;;
	private Double insumo7 = 0.0;;
	private Double insumo8 = 0.0;;
	private Double insumo9 = 0.0;
	private Double insumo10 = 0.0;
	private Double insumo11 = 0.0;
	private Double insumo12 = 0.0;
	private Double qtd_final = 0.0;
	private String user;
	private String date;
	private String name_ration;
	private String disable;
	private Double price = 0.0;
	
	
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getType_animal() {
		return type_animal;
	}
	public void setType_animal(String type_animal) {
		this.type_animal = type_animal;
	}
	public Double getInsumo1() {
		return insumo1;
	}
	public String getDisable() {
		return disable;
	}
	public void setDisable(String disable) {
		this.disable = disable;
	}
	public void setInsumo1(Double insumo1) {
		this.insumo1 = insumo1;
	}
	public Double getInsumo2() {
		return insumo2;
	}
	public void setInsumo2(Double insumo2) {
		this.insumo2 = insumo2;
	}
	public Double getInsumo3() {
		return insumo3;
	}
	public void setInsumo3(Double insumo3) {
		this.insumo3 = insumo3;
	}
	public Double getInsumo4() {
		return insumo4;
	}
	public void setInsumo4(Double insumo4) {
		this.insumo4 = insumo4;
	}
	public Double getInsumo5() {
		return insumo5;
	}
	public void setInsumo5(Double insumo5) {
		this.insumo5 = insumo5;
	}
	public Double getInsumo6() {
		return insumo6;
	}
	public void setInsumo6(Double insumo6) {
		this.insumo6 = insumo6;
	}
	public Double getInsumo7() {
		return insumo7;
	}
	public void setInsumo7(Double insumo7) {
		this.insumo7 = insumo7;
	}
	public Double getInsumo8() {
		return insumo8;
	}
	public void setInsumo8(Double insumo8) {
		this.insumo8 = insumo8;
	}
	public Double getInsumo9() {
		return insumo9;
	}
	public void setInsumo9(Double insumo9) {
		this.insumo9 = insumo9;
	}
	public Double getInsumo10() {
		return insumo10;
	}
	public void setInsumo10(Double insumo10) {
		this.insumo10 = insumo10;
	}
	public Double getInsumo11() {
		return insumo11;
	}
	public void setInsumo11(Double insumo11) {
		this.insumo11 = insumo11;
	}
	public Double getInsumo12() {
		return insumo12;
	}
	public void setInsumo12(Double insumo12) {
		this.insumo12 = insumo12;
	}
	public Double getQtd_final() {
		return qtd_final;
	}
	public void setQtd_final(Double qtd_final) {
		this.qtd_final = qtd_final;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getName_ration() {
		return name_ration;
	}
	public void setName_ration(String name_ration) {
		this.name_ration = name_ration;
	}

	
}
