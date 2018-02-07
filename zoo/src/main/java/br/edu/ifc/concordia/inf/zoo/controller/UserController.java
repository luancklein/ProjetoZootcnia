package br.edu.ifc.concordia.inf.zoo.controller;

import java.util.List;

import javax.inject.Inject;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.boilerplate.NoCache;
import br.com.caelum.vraptor.boilerplate.factory.SessionFactoryProducer;
import br.com.caelum.vraptor.boilerplate.util.GeneralUtils;
import br.edu.ifc.concordia.inf.zoo.IndexController;
import br.edu.ifc.concordia.inf.zoo.abstractions.AbstractController;
import br.edu.ifc.concordia.inf.zoo.business.UserBS;
import br.edu.ifc.concordia.inf.zoo.model.User;
import br.edu.ifc.concordia.inf.zoo.permission.Permission;
import br.edu.ifc.concordia.inf.zoo.permission.UserRoles;

@Controller
public class UserController extends AbstractController {
	@Inject private UserBS bs;
	
	@Get("/exitUser")
	public void exitUser() {
		this.userSession.logout();
		this.result.redirectTo(UserController.class).login(null);
	}
	
	@Get("/login")
	public void login(String errorMsg) {
		if (!GeneralUtils.isEmpty(errorMsg)){
			this.result.include("errorMsg",errorMsg);
		}
		
	}
	@Post(value="/login")
	@NoCache
	public void doLogin(String username, String password)
	{
		User user = this.bs.login(username, password);
		if (user == null){
			this.result.redirectTo(this).login("Usuário ou senha errado!");
		}else{
			this.userSession.login(user);
			this.result.redirectTo(IndexController.class).index();
		}
	}
	
	@Get(value="/cadastro")
	@Permission(UserRoles.ADMIN)
	public void cadastro() {
	}
	
	@Get(value="/perfilUser")
	@Permission(UserRoles.ADMIN)
	public void perfilUser() {
	}

	@Get(value="/control")
	@Permission(UserRoles.ADMIN)
	public void control() {
	}

	@Get("/UserList")
	public void userList() {
		List<User> users = this.bs.listUsers();
		this.result.include("users", users);
	}
	
	@Get("/registerUser")
	@Permission(UserRoles.ADMIN)
	public void cadastro(String errorMsg) {
		if (!GeneralUtils.isEmpty(errorMsg)){
			this.result.include("errorMsg",errorMsg);
		}
	}
	
	@Post(value="/registerUser")
	@NoCache
	public void doCadastro(String nome, String email, String cargo, String login, String senha, String conf){
		if(!senha.equals(conf)){
			this.result.redirectTo(this).cadastro("Confirme a senha corretamente.");
		}
		SessionFactoryProducer factoryProducer = new SessionFactoryProducer();
		this.bs.cadastro(factoryProducer, nome, email, cargo, login, senha);
		this.result.redirectTo(IndexController.class).index();
	}
	
	@Get(value="{id}/edit")
	@Permission(UserRoles.ADMIN)
	@NoCache
	public void userEdit(Long id) {
		if (id == null) {
			this.result.notFound();
		} else {
			User user = this.bs.exists(id, User.class);
			if (user == null) {
				this.result.notFound();
			} else {
				this.result.include("user", user);
			}
		}
	}
	

	@Post(value="/modificarPerfil")
	@NoCache
	public void update(String nome, String email, String cargo, String login) {
		User user = this.bs.update(this.userSession.getUser().getNome(), nome, email, cargo, login); 
		this.userSession.login(user);
		this.result.redirectTo(IndexController.class).index();
	}
	
	
}






