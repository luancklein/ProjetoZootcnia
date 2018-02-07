package br.edu.ifc.concordia.inf.zoo.business;

import java.util.List;
import javax.enterprise.context.RequestScoped;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import br.com.caelum.vraptor.boilerplate.HibernateBusiness;
import br.edu.ifc.concordia.inf.zoo.model.BuyInputs;
@RequestScoped
public class BuyInputsBS extends HibernateBusiness{
	
	public void registerNewBuy(String name, String dateBuy, double qtdBuy, double priceTotal, String year, double pricePerKg)
	{
		BuyInputs buy = new BuyInputs();
		buy.setDateBuy(dateBuy);
		buy.setName(name);
		buy.setPricePerKg(pricePerKg);
		buy.setPriceTotal(priceTotal);
		buy.setYear(year);
		buy.setQtdBuy(qtdBuy);
		dao.persist(buy);
	}
	
	public List<BuyInputs> reportBuyInput(String name, String year) {
		Criteria criteria = this.dao.newCriteria(BuyInputs.class);
		if (name.length() > 1)
		{
			criteria.add(Restrictions.eq("name", name));
		}
		if (year.length() > 3)
		{
			criteria.add(Restrictions.eq("year", year));
		}
		return this.dao.findByCriteria(criteria, BuyInputs.class);
	}
	
	
	public boolean deleteBuy(Long id)
	{
		
		
		Criteria criteria = this.dao.newCriteria(BuyInputs.class);
		criteria.add(Restrictions.eq("id", id));
		BuyInputs ship = (BuyInputs) criteria.uniqueResult();
		
		dao.delete(ship);
		return true;
		
	}
}