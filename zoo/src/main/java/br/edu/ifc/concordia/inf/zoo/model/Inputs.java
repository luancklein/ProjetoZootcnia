package br.edu.ifc.concordia.inf.zoo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="Inputs")
@Table(name="Inputs")
public class Inputs implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String nameInput;

	public String getNameInput() {
		return nameInput;
	}
	public void setNameInput(String nameInput) {
		this.nameInput = nameInput;
	}
}
