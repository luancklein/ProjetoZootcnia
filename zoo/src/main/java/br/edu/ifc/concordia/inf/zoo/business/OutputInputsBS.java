package br.edu.ifc.concordia.inf.zoo.business;

import java.util.List;

import javax.enterprise.context.RequestScoped;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;

import br.com.caelum.vraptor.boilerplate.HibernateBusiness;
import br.edu.ifc.concordia.inf.zoo.model.OutputInputs;

@RequestScoped
public class OutputInputsBS extends HibernateBusiness{
	
	public void registerNewOutput(String nameInput, String nameProdution, String animal, double qtd, String date, String year, Long id)
	{
		OutputInputs input = new OutputInputs();
		input.setAnimal(animal);
		input.setDate(date);
		input.setNameProdution(nameProdution);
		input.setQtd(qtd);
		input.setYear(year);
		input.setNameInput(nameInput);
		input.setIdProd(id);
		dao.persist(input);
	}
	
	public List<OutputInputs> reportOutputInputs(String nameInput, String year, String animal, String nameProdution) {
		Criteria criteria = this.dao.newCriteria(OutputInputs.class);
		if (nameInput.length() > 1)
		{
			criteria.add(Restrictions.eq("nameInput", nameInput));
		}
		if (year.length() > 3)
		{
			criteria.add(Restrictions.eq("year", year));
		}
		if (animal.length() > 1)
		{
			criteria.add(Restrictions.eq("animal", animal));
		}
		if (nameProdution.length() > 1)
		{
			criteria.add(Restrictions.eq("nameProdution", nameProdution));
		}		

		return this.dao.findByCriteria(criteria, OutputInputs.class);
	}
	
	public void deleteOutput(Long id, String name)
	{
		Criteria criteria = this.dao.newCriteria(OutputInputs.class);
		criteria.add(Restrictions.eq("nameInput", name));
		criteria.add(Restrictions.eq("idProd", id));
		OutputInputs output = (OutputInputs) criteria.uniqueResult();
		if (output != null)
		{
			dao.delete(output);
		}
	}

}
