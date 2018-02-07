package br.edu.ifc.concordia.inf.zoo;

import java.io.Serializable;

import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

import br.edu.ifc.concordia.inf.zoo.model.User;

@Named("userSession")
@SessionScoped
public class UserSession implements Serializable {
	private static final long serialVersionUID = 1L;

	private User user;
	private String pagina;
	
	public void login (User user)
	{
		this.user = user;
	}
	public void logout (){
		this.user = null;
	}
	public boolean isLogged() {
		return this.user != null;
	}
	public User getUser(){
		return this.user;
	}
	public String getPagina(){
		return this.pagina;
	}
	public void setPagina(String page){
		this.pagina = page;
	}
}
