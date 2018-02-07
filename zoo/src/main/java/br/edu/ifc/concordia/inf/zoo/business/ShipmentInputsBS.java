package br.edu.ifc.concordia.inf.zoo.business;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import br.com.caelum.vraptor.boilerplate.HibernateBusiness;
import br.edu.ifc.concordia.inf.zoo.model.ShipmentInputs;

@RequestScoped
public class ShipmentInputsBS extends HibernateBusiness{

	
	public void addNewShipment(String name, double qtd, String dateArrive, String year)
	{
		ShipmentInputs input = new ShipmentInputs();
		input.setDateArrive(dateArrive);
		input.setName(name);
		input.setQtd(qtd);
		input.setYear(year);
		dao.persist(input);
	}
	
	
	public List<ShipmentInputs> reportShipmentInput(String name, String year) {
		Criteria criteria = this.dao.newCriteria(ShipmentInputs.class);
		if (name.length() > 1)
		{
			criteria.add(Restrictions.eq("name", name));
		}
		if (year.length() > 3)
		{
			criteria.add(Restrictions.eq("year", year));
		}
		return this.dao.findByCriteria(criteria, ShipmentInputs.class);
	}
	
	public boolean deleteShipment(Long id)
	{
		Criteria criteria = this.dao.newCriteria(ShipmentInputs.class);
		criteria.add(Restrictions.eq("id", id));
		ShipmentInputs ship = (ShipmentInputs) criteria.uniqueResult();
		
		dao.delete(ship);
		return true;
	}
}
