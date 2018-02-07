package br.edu.ifc.concordia.inf.zoo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="Bovinos")
@Table(name="Bovinos")
public class Bovino implements Serializable  {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String CR;
	private String Variety;
	@Column(unique=true)
	private String Name;
	@Column(unique=true)
	private int NR;
	@Column(unique=true)
	private int NB;
	private String DateofBirth;
	private String Mom;
	private String Dad;
	private String Creator;
	private int Status;
	private String Cadastror;
	public Long getId() {
		return id;
	}

	public String getCadastror() {
		return Cadastror;
	}

	public void setCadastror(String cadastror) {
		Cadastror = cadastror;
	}

	public String getCR() {
		return CR;
	}

	public void setCR(String cR) {
		CR = cR;
	}

	public String getVariety() {
		return Variety;
	}

	public void setVariety(String variety) {
		Variety = variety;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getNR() {
		return NR;
	}

	public void setNR(int nR) {
		NR = nR;
	}

	public int getNB() {
		return NB;
	}

	public void setNB(int nB) {
		NB = nB;
	}

	public String getDateofBirth() {
		return DateofBirth;
	}

	public void setDateofBirth(String dateofBirth) {
		DateofBirth = dateofBirth;
	}

	public String getMom() {
		return Mom;
	}

	public void setMom(String mom) {
		Mom = mom;
	}

	public String getDad() {
		return Dad;
	}

	public void setDad(String dad) {
		Dad = dad;
	}

	public String getCreator() {
		return Creator;
	}

	public void setCreator(String creator) {
		Creator = creator;
	}

	public int getStatus() {
		return Status;
	}

	public void setStatus(int status) {
		Status = status;
	}
	
}
