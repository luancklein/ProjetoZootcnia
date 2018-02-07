package br.edu.ifc.concordia.inf.zoo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="receitas")
@Table(name="receitas")
public class Receitas implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String type_animal;
	private String insumo1 = "None";
	private String insumo2 = "None";
	private String insumo3 = "None";
	private String insumo4 = "None";
	private String insumo5 = "None";
	private String insumo6 = "None";
	private String insumo7 = "None";
	private String insumo8 = "None";
	private String insumo9 = "None";
	private String insumo10 = "None";
	private String insumo11 = "None";
	private String insumo12 = "None";

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType_animal() {
		return type_animal;
	}
	public void setType_animal(String type_animal) {
		this.type_animal = type_animal;
	}
	public String getInsumo1() {
		return insumo1;
	}
	public void setInsumo1(String insumo1) {
		this.insumo1 = insumo1;
	}
	public String getInsumo2() {
		return insumo2;
	}
	public void setInsumo2(String insumo2) {
		this.insumo2 = insumo2;
	}
	public String getInsumo3() {
		return insumo3;
	}
	public void setInsumo3(String insumo3) {
		this.insumo3 = insumo3;
	}
	public String getInsumo4() {
		return insumo4;
	}
	public void setInsumo4(String insumo4) {
		this.insumo4 = insumo4;
	}
	public String getInsumo5() {
		return insumo5;
	}
	public void setInsumo5(String insumo5) {
		this.insumo5 = insumo5;
	}
	public String getInsumo6() {
		return insumo6;
	}
	public void setInsumo6(String insumo6) {
		this.insumo6 = insumo6;
	}
	public String getInsumo7() {
		return insumo7;
	}
	public void setInsumo7(String insumo7) {
		this.insumo7 = insumo7;
	}
	public String getInsumo8() {
		return insumo8;
	}
	public void setInsumo8(String insumo8) {
		this.insumo8 = insumo8;
	}
	public String getInsumo9() {
		return insumo9;
	}
	public void setInsumo9(String insumo9) {
		this.insumo9 = insumo9;
	}
	public String getInsumo10() {
		return insumo10;
	}
	public void setInsumo10(String insumo10) {
		this.insumo10 = insumo10;
	}
	public String getInsumo11() {
		return insumo11;
	}
	public void setInsumo11(String insumo11) {
		this.insumo11 = insumo11;
	}
	public String getInsumo12() {
		return insumo12;
	}
	public void setInsumo12(String insumo12) {
		this.insumo12 = insumo12;
	}

	
}

