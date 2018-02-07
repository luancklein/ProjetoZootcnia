package br.edu.ifc.concordia.inf.zoo.business;

import java.util.List;

import javax.enterprise.context.RequestScoped;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;

import br.com.caelum.vraptor.boilerplate.HibernateBusiness;
import br.edu.ifc.concordia.inf.zoo.model.Inputs;

@RequestScoped
public class InputsBS extends HibernateBusiness {

	public List<Inputs> listInputs() {
		Criteria criteria = this.dao.newCriteria(Inputs.class);
		return this.dao.findByCriteria(criteria, Inputs.class);
	}

	public Boolean registerNewInput(String nameInput) {
			
		Criteria criteria = this.dao.newCriteria(Inputs.class);
		criteria.add(Restrictions.eq("nameInput", nameInput));
		Inputs userTest = (Inputs) criteria.uniqueResult();
		
		if (userTest != null) {
			return false;
		}
		else {
			Inputs input = new Inputs();
			input.setNameInput(nameInput);
			dao.persist(input);
			return true;
		}
		
	}
	


}
