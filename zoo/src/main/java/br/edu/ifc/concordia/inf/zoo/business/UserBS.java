package br.edu.ifc.concordia.inf.zoo.business;

import java.util.List;
import javax.enterprise.context.RequestScoped;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import br.com.caelum.vraptor.boilerplate.HibernateBusiness;
import br.com.caelum.vraptor.boilerplate.factory.SessionFactoryProducer;
import br.com.caelum.vraptor.boilerplate.util.CryptManager;
import br.edu.ifc.concordia.inf.zoo.model.User;
import br.edu.ifc.concordia.inf.zoo.properties.SystemConfigs;

@RequestScoped
public class UserBS extends HibernateBusiness {

	public List<User> listUsers() {
		Criteria criteria = this.dao.newCriteria(User.class);
		return this.dao.findByCriteria(criteria, User.class);
	}

	public User login(String login, String password) {
		Criteria criteria = this.dao.newCriteria(User.class);
		criteria.add(Restrictions.eq("login", login));
		criteria.add(Restrictions.eq("senha", CryptManager.passwordHash(password)));
		return (User) criteria.uniqueResult();
	}

	public void cadastro(SessionFactoryProducer factoryProducer, String nome, String email, String cargo, String login,
			String senha) {

		factoryProducer.initialize("hibernate.cfg.xml");

		CryptManager.updateKey(SystemConfigs.getConfig("crypt.key"));
		CryptManager.updateSalt("@2o!A", "70Px$");
		
		Criteria criteria = this.dao.newCriteria(User.class);
		criteria.add(Restrictions.eq("login", login));
		User userTest = (User) criteria.uniqueResult();

		Criteria criteria2 = this.dao.newCriteria(User.class);
		criteria2.add(Restrictions.eq("email", email));
		User userTest2 = (User) criteria.uniqueResult();

		if (userTest != null) {
			String i = "Username já cadastrado!";
		} else if (userTest2 != null) {
			String i = "E-mail já cadastrado!";
		} else {

			User user = new User();
			user.setNome(nome);
			user.setEmail(email);
			user.setCargo(cargo);
			user.setLogin(login);
			user.setSenha(CryptManager.passwordHash(senha));
			this.dao.persist(user);

		}
	}

	public User update(String nameUserlogged, String nome, String email, String cargo, String login) {
		Criteria criteria = this.dao.newCriteria(User.class);
		criteria.add(Restrictions.eq("nome", nameUserlogged));
		User userUpdate = (User) criteria.uniqueResult();
		userUpdate.setNome(nome);
		userUpdate.setCargo(cargo);
		userUpdate.setLogin(login);
		userUpdate.setEmail(email);
		dao.update(userUpdate);
		return userUpdate;
	}
}
