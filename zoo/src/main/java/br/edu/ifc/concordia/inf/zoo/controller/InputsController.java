package br.edu.ifc.concordia.inf.zoo.controller;


import java.util.List;

import javax.inject.Inject;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.boilerplate.NoCache;
import br.edu.ifc.concordia.inf.zoo.abstractions.AbstractController;
import br.edu.ifc.concordia.inf.zoo.business.BuyInputsBS;
import br.edu.ifc.concordia.inf.zoo.business.ForecastRationBS;
import br.edu.ifc.concordia.inf.zoo.business.InputsBS;
import br.edu.ifc.concordia.inf.zoo.business.ProdutionBS;
import br.edu.ifc.concordia.inf.zoo.business.StockCurrentBS;
import br.edu.ifc.concordia.inf.zoo.model.Inputs;
import br.edu.ifc.concordia.inf.zoo.model.Receitas;
import br.edu.ifc.concordia.inf.zoo.model.StockCurrent;
import br.edu.ifc.concordia.inf.zoo.model.BuyInputs;
import br.edu.ifc.concordia.inf.zoo.model.ForecastRation;
import br.edu.ifc.concordia.inf.zoo.permission.Permission;
import br.edu.ifc.concordia.inf.zoo.permission.UserRoles;

@Controller
public class InputsController extends AbstractController{
	@Inject private InputsBS bs;
	@Inject private StockCurrentBS bs2;
	@Inject private BuyInputsBS bs3;
	@Inject private ProdutionBS bs4;
	@Inject private ForecastRationBS bs5;
	
	@Get(value="/add_new_input")
	@Permission(UserRoles.ADMIN)
	public void add_new_input() {
	}
	
	@Get(value="/buy_input")
	@Permission(UserRoles.ADMIN)
	public void buy_input() {
		List<Inputs> list = this.bs.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/delete_buy_input")
	@Permission(UserRoles.ADMIN)
	public void delete_buy_input() {
		List<Inputs> list = this.bs.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/report_buy")
	public void report_buy() {
		List<Inputs> list = this.bs.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/forecast_ration")
	public void forecast_ration() {
		List<Inputs> list = this.bs.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/registerNewInputInToStock")
	@NoCache
	public void registerNewInputInToStock(String name)
	{		
		Boolean resultado = this.bs.registerNewInput(name);	
		if (resultado == true)
		{
			this.bs2.actualizeInput(name, 0.0, "none", "register", 0);
			this.bs5.registerNewInput(name);
		}
		this.success(resultado);
	}	
	
	@Get(value="/buyInputReport")
	@NoCache
	public void buyInputRepor(String name, String year)
	{
		try {			
			List<BuyInputs> buy = this.bs3.reportBuyInput(name, year);
			this.success(buy, (long) buy.size());
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
	}	
	
	@Get(value="/buyInput")
	@NoCache
	public void buyInput(String name, String dateBuy, double qtdBuy, double priceBuy)
	{
		double pricePerKg = priceBuy / qtdBuy;
		String year = dateBuy.substring(0, 4);
		this.bs3.registerNewBuy(name, dateBuy, qtdBuy, priceBuy, year, pricePerKg);
		this.bs2.actualizeInput(name, qtdBuy, dateBuy, "buy", pricePerKg);
		this.success(true);
	}	
	
	@Get(value="/deleteBuyInput")
	@NoCache
	public void deleteBuyInput(Long id, double qtdBuy, String name)
	{
		boolean state;
		boolean result1 = this.bs2.deleteBuy(name, qtdBuy);
		if (result1 == false)
		{
			state = false;
		}
		else {
			state = this.bs3.deleteBuy(id);
			this.bs2.changePricePerKg(name);
			}
		this.success(state);
	}	
	
	
	@Get("/getNameRationsToReport")
	@NoCache
	public void listNamesRations(String animal)
	{
		try {
			List<Receitas> receita = this.bs4.listTypeRationEspe(animal); 
			this.success(receita, (long) receita.size());
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
	}
	
	@Get("/getStockNow")
	@NoCache
	public void getStockNow()
	{
		try {
			List<StockCurrent> stock = this.bs2.listStockNow(); 
			this.success(stock, (long) stock.size());
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
	}
	
	@Get("/getInputForecast")
	@NoCache
	public void getInputForecast()
	{
		try {
			 List<ForecastRation> input = this.bs5.listInputsForecast(); 
			this.success(input, (long) input.size());
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
	}
	
	
	
	
	
}
