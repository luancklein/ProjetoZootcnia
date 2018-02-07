package br.edu.ifc.concordia.inf.zoo.controller;

import java.util.List;

import javax.inject.Inject;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.boilerplate.NoCache;
import br.edu.ifc.concordia.inf.zoo.abstractions.AbstractController;
import br.edu.ifc.concordia.inf.zoo.business.InputsBS;
import br.edu.ifc.concordia.inf.zoo.business.OutputInputsBS;
import br.edu.ifc.concordia.inf.zoo.business.ShipmentInputsBS;
import br.edu.ifc.concordia.inf.zoo.business.StockCurrentBS;
import br.edu.ifc.concordia.inf.zoo.model.Inputs;
import br.edu.ifc.concordia.inf.zoo.model.OutputInputs;
import br.edu.ifc.concordia.inf.zoo.model.ShipmentInputs;
import br.edu.ifc.concordia.inf.zoo.model.StockCurrent;
import br.edu.ifc.concordia.inf.zoo.permission.Permission;
import br.edu.ifc.concordia.inf.zoo.permission.UserRoles;

@Controller
public class StockController  extends AbstractController{
	@Inject private InputsBS bs2;
	@Inject private StockCurrentBS bs3;
	@Inject private ShipmentInputsBS bs4;
	@Inject private OutputInputsBS bs6;
	
	
	@Get(value="/add_input_in_stock")
	@Permission(UserRoles.ADMIN)
	public void add_input_in_stock() {
		List<Inputs> list = this.bs2.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/report_shipment")
	public void report_shipment() {
		List<Inputs> list = this.bs2.listInputs();
		this.result.include("list", list);
	}

	@Get(value="/delete_shipment")
	@Permission(UserRoles.ADMIN)
	public void delete_shipment() {
		List<Inputs> list = this.bs2.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/report_outputs")
	public void report_outputs() {
		List<Inputs> list = this.bs2.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/stock_manager")
	@Permission(UserRoles.ADMIN)
	public void stock_manager() {
	}
	
	@Get(value="/registerNewAtualizationOnInputs")
	@NoCache
	public void registerNewAtualizationOnInputs(String name_input, double qtd, String date)
	{
		//this.bs.registerNewQtd(name_input, qtd, date, "entrada");
		Boolean resultado = this.bs3.actualizeInput(name_input, qtd, date, "shipment", 0);
		if (resultado == true)
		{
			this.bs4.addNewShipment(name_input, qtd, date, date.substring(0, 4));
		}
			this.success(resultado);
	}
	
	
	@Get(value="/show_inputs")
	public void show_inputs() {
		List<StockCurrent> stock = this.bs3.listStockNow();
		this.result.include("stock", stock);
	}
	
	@Get(value="/shipmentReport")
	@NoCache
	public void shipmentReport(String name, String year)
	{
		try {			
			List<ShipmentInputs> buy = this.bs4.reportShipmentInput(name, year);
			this.success(buy, (long) buy.size());
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
	}
	
	
	@Get(value="/outputInputsReport")
	@NoCache
	public void outputInputsReport(String name, String year, String prodution, String animal)
	{
		try {			
			List<OutputInputs> buy = this.bs6.reportOutputInputs(name, year, animal, prodution);
			this.success(buy, (long) buy.size());
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
	}	
	
	@Get(value="/deleteShipment")
	@NoCache
	public void deleteShipment(Long id, String name, double qtd)
	{
		boolean result2 = this.bs4.deleteShipment(id);
		boolean state;
		if (result2 == false)
		{
			state = false;
		}
		else {
			this.bs3.deleteShipment(name, qtd);
			state = true;
		}
		this.success(state);
	}
	
}
