package br.edu.ifc.concordia.inf.zoo.business;

import java.util.List;
import javax.enterprise.context.RequestScoped;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import br.com.caelum.vraptor.boilerplate.HibernateBusiness;
import br.edu.ifc.concordia.inf.zoo.model.ForecastRation;


@RequestScoped
public class ForecastRationBS extends HibernateBusiness {
	
	public List<ForecastRation> listInputsForecast() {
		Criteria criteria = this.dao.newCriteria(ForecastRation.class);
		return this.dao.findByCriteria(criteria, ForecastRation.class);
	}

	public void registerNewInput(String name)
	{
		ForecastRation input = new ForecastRation();
		input.setFirstDate("None");
		input.setNameInput(name);
		input.setQtdProdutions(0);
		input.setTotalOutput(0.0);
		dao.persist(input);
	}
	
	public void registerNewAtualization(String name, double qtd, String date) 
	{
		Criteria criteria = this.dao.newCriteria(ForecastRation.class);
		criteria.add(Restrictions.eq("nameInput", name));
		ForecastRation input = (ForecastRation) criteria.uniqueResult();
		if (input.getFirstDate().equals("None")) 
		{
			input.setFirstDate(date);
		}
		
		input.setLastDate(date);
		Double qtdNow = input.getTotalOutput();
		qtdNow += qtd;
		int qtdProd = input.getQtdProdutions();
		qtdProd += 1;
		input.setQtdProdutions(qtdProd);
		input.setTotalOutput(qtdNow);
		dao.update(input);
	}
	
	public void deleteOutput(String name, double qtd)
	{
		Criteria criteria = this.dao.newCriteria(ForecastRation.class);
		criteria.add(Restrictions.eq("nameInput", name));
		ForecastRation input = (ForecastRation) criteria.uniqueResult();
		
		double qtdN = input.getTotalOutput() - qtd;
		int qtdQ = input.getQtdProdutions() - 1;
		
		input.setQtdProdutions(qtdQ);
		input.setTotalOutput(qtdN);
		dao.update(input);
	}
}
