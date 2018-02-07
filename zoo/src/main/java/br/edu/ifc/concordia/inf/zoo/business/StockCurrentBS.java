package br.edu.ifc.concordia.inf.zoo.business;

import java.util.List;

import javax.enterprise.context.RequestScoped;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;

import br.com.caelum.vraptor.boilerplate.HibernateBusiness;
import br.edu.ifc.concordia.inf.zoo.model.BuyInputs;
import br.edu.ifc.concordia.inf.zoo.model.StockCurrent;

@RequestScoped
public class StockCurrentBS extends HibernateBusiness {

	public Boolean actualizeInput(String name, Double qtd, String date, String type, double pricePerKg) {
		Criteria criteria = this.dao.newCriteria(StockCurrent.class);
		criteria.add(Restrictions.eq("nameInput", name));
		StockCurrent input = (StockCurrent) criteria.uniqueResult();
		if (type == "register") {
			input = new StockCurrent();
			input.setNameInput(name);
			input.setPricePerKg(0.0);
			input.setQtdExternalStorage(0.0);
			input.setQtdInIFC(0.0);
			input.setDate(date);
			dao.persist(input);
		}

		if (type == "shipment") {

			if (input.getQtdExternalStorage() - qtd < 0) {
				return false;
			} else {
				double qtdNow = input.getQtdInIFC() + qtd;
				input.setQtdInIFC(qtdNow);
				double qtdAble = input.getQtdExternalStorage() - qtd;
				input.setQtdExternalStorage(qtdAble);
				input.setDate(date);
				dao.update(input);
			}
		}

		if (type == "output") {
			double qtdNow = input.getQtdInIFC() - qtd;
			input.setQtdInIFC(qtdNow);
			input.setDate(date);
			dao.update(input);
		}

		if (type == "buy") {

			double qtdNow = input.getQtdExternalStorage() + qtd;
			input.setQtdExternalStorage(qtdNow);
			input.setPricePerKg(pricePerKg);
			input.setDate(date);
			dao.update(input);
		}

		return true;

	}

	public Boolean ableToDoNewProdution(String name, double qtd) {
		Criteria criteria = this.dao.newCriteria(StockCurrent.class);
		criteria.add(Restrictions.eq("nameInput", name));
		StockCurrent input = (StockCurrent) criteria.uniqueResult();
		double qt = input.getQtdInIFC();
		if (qt - qtd < 0) {
			return false;
		} else {
			return true;
		}
	}

	public List<StockCurrent> listStockNow() {
		Criteria criteria = this.dao.newCriteria(StockCurrent.class);
		return this.dao.findByCriteria(criteria, StockCurrent.class);
	}
	
	public boolean deleteBuy(String name, double qtdB)
	{
		Criteria criteria = this.dao.newCriteria(StockCurrent.class);
		criteria.add(Restrictions.eq("nameInput", name));
		StockCurrent input = (StockCurrent) criteria.uniqueResult();
		double qt = input.getQtdExternalStorage() - qtdB;
		if (qt >= 0)
		{
			input.setQtdExternalStorage(qt);
			dao.update(input);
			return true;
			
		}
		else {
			return false;
		}
	}
	
	public void changePricePerKg(String name)
	{
		Criteria criteriaB = this.dao.newCriteria(BuyInputs.class);
		criteriaB.add(Restrictions.eq("name", name));
		List<BuyInputs> buys = this.dao.findByCriteria(criteriaB, BuyInputs.class);
		double price = 0;	
		for (BuyInputs c : buys) {
			   price = c.getPricePerKg();
			}
		//PRECISA DE ATENÇÃO, POIS SE TIVER MAIS DE UMA COMPRA CADASTRADA, PODE HAVER PROBLEMAS
		Criteria criteria = this.dao.newCriteria(StockCurrent.class);
		criteria.add(Restrictions.eq("nameInput", name));
		StockCurrent input = (StockCurrent) criteria.uniqueResult();
		input.setPricePerKg(price);
		dao.update(input);
		
	}
	
	
	public boolean deleteShipment(String name, double qtdB)
	{
		Criteria criteria = this.dao.newCriteria(StockCurrent.class);
		criteria.add(Restrictions.eq("nameInput", name));
		StockCurrent input = (StockCurrent) criteria.uniqueResult();
		
		double qtE = input.getQtdExternalStorage() + qtdB;
		double qtI = input.getQtdInIFC() - qtdB;
		
		if (qtI < 0)
		{
			return false;
		}
		else {
			input.setQtdExternalStorage(qtE);
			input.setQtdInIFC(qtI);
			dao.update(input);
			return true;
		}
	
	}
	
	
	public void deleteOutput(String name, double qtd)
	{
		Criteria criteria = this.dao.newCriteria(StockCurrent.class);
		criteria.add(Restrictions.eq("nameInput", name));
		StockCurrent input = (StockCurrent) criteria.uniqueResult();
	
		double qtI = input.getQtdInIFC() + qtd;
		input.setQtdInIFC(qtI);
		dao.update(input);
	}
	
}
