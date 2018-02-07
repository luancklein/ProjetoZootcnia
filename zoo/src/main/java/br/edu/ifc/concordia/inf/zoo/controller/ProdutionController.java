package br.edu.ifc.concordia.inf.zoo.controller;


import java.util.List;

import javax.inject.Inject;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.boilerplate.NoCache;
import br.edu.ifc.concordia.inf.zoo.IndexController;
import br.edu.ifc.concordia.inf.zoo.abstractions.AbstractController;
import br.edu.ifc.concordia.inf.zoo.business.ProdutionBS;
import br.edu.ifc.concordia.inf.zoo.business.StockCurrentBS;
import br.edu.ifc.concordia.inf.zoo.business.ForecastRationBS;
import br.edu.ifc.concordia.inf.zoo.business.InputsBS;
import br.edu.ifc.concordia.inf.zoo.business.OutputInputsBS;
import br.edu.ifc.concordia.inf.zoo.model.Inputs;
import br.edu.ifc.concordia.inf.zoo.model.Produtions;
import br.edu.ifc.concordia.inf.zoo.model.Receitas;
import br.edu.ifc.concordia.inf.zoo.permission.Permission;
import br.edu.ifc.concordia.inf.zoo.permission.UserRoles;

@Controller
public class ProdutionController extends AbstractController {
	@Inject private ProdutionBS bs;
	@Inject private ForecastRationBS bs2;
	@Inject private StockCurrentBS bs3;
	@Inject private OutputInputsBS bs4;
	@Inject private InputsBS bs5;
	

	@Get(value="/receipts_report")
	public void receipts_report() {	
		List<Receitas> types = this.bs.listTypeRations();
		this.result.include("types", types);	
	}
	
	@Get(value="/add_prodution")
	@Permission(UserRoles.ADMIN)
	public void add_prodution() {	
		List<Receitas> types = this.bs.listTypeRations();
		this.result.include("rations", types);	
	}

	@Get(value="/add_type_ration")
	@Permission(UserRoles.ADMIN)
	public void add_type_ration() {
		List<Inputs> list = this.bs5.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/remove_prodution")
	@Permission(UserRoles.ADMIN)
	public void remove_prodution() {	
	}
	
	@Get(value="/edit_type_ration")
	@Permission(UserRoles.ADMIN)
	public void edit_type_ration() {	
		List<Inputs> list = this.bs5.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/informations_prod")
	public void informations_prod() {	
		List<Inputs> list = this.bs5.listInputs();
		this.result.include("list", list);
	}
	
	@Get(value="/registerNewTypeRation")
	@NoCache
	public void registerNewTypeRation(String def_name_ration, String for_animal, String insumo1, String insumo2, String insumo3, String insumo4, String insumo5, 
			String insumo6, String insumo7, String insumo8, String insumo9, String insumo10, String insumo11, String insumo12){	
		Boolean resultado = this.bs.doRegisterNewType(def_name_ration, for_animal, insumo1, insumo2,  insumo3,  insumo4, insumo5, 
				 insumo6,  insumo7,  insumo8, insumo9, insumo10,  insumo11,  insumo12);
		this.success(resultado);
	}

	@Post(value="/registerNewProdution")
	@NoCache
	public void registerNewProdution(Produtions prod) {
		Receitas receita = this.bs.getInsumos(prod.getName_ration(), prod.getType_animal());
		double[] qtdInputs;
		qtdInputs = new double[12];
		qtdInputs[0] = prod.getInsumo1();
		qtdInputs[1] = prod.getInsumo2();
		qtdInputs[2] = prod.getInsumo3();
		qtdInputs[3] = prod.getInsumo4();
		qtdInputs[4] = prod.getInsumo5();
		qtdInputs[5] = prod.getInsumo6();
		qtdInputs[6] = prod.getInsumo7();
		qtdInputs[7] = prod.getInsumo8();
		qtdInputs[8] = prod.getInsumo9();
		qtdInputs[9] = prod.getInsumo10();
		qtdInputs[10] = prod.getInsumo11();
		qtdInputs[11] = prod.getInsumo12();
		
		String[] names;
		names = new String[12];
		names[0] = receita.getInsumo1();
		names[1] = receita.getInsumo2();
		names[2] = receita.getInsumo3();
		names[3] = receita.getInsumo4();
		names[4] = receita.getInsumo5();
		names[5] = receita.getInsumo6();
		names[6] = receita.getInsumo7();
		names[7] = receita.getInsumo8();
		names[8] = receita.getInsumo9();
		names[9] = receita.getInsumo10();
		names[10] = receita.getInsumo11();
		names[11] = receita.getInsumo12();		
		
		Boolean state = true;
		
		
		for (int i = 0; i < 12; i++)
		{
			if (!names[i].equals("None")) {
				Boolean resultado = this.bs3.ableToDoNewProdution(names[i], qtdInputs[i]);
				if (resultado == false)
				{
					state = false;
				}
			}
		}
		if (state == true)
		{
			prod.setUser(this.userSession.getUser().getNome());
			Long idProd = this.bs.doRegisterNewProdution(prod);
			
		for (int i = 0; i < 12; i ++)
		{
			if (names[i] != "None" && qtdInputs[i] != 0)
			{
				//this.bs2.registerNewQtd(names[i], qtdInputs[i], prod.getDate(), "saída");
				this.bs2.registerNewAtualization(names[i], qtdInputs[i], prod.getDate());
				this.bs3.actualizeInput(names[i], qtdInputs[i], prod.getDate(), "output", 0);
				this.bs4.registerNewOutput(names[i], prod.getName_ration(), prod.getType_animal(), qtdInputs[i], prod.getDate(), prod.getDate().substring(0,4), idProd);
			}
		}
		
		//this.result.redirectTo(IndexController.class).indexracao();
		}	
		
		this.success(state);
	}
	
	@Get("/getInsumos")
	@NoCache
	public void listInsumos(String name, String animal)
	{
		try {
			Receitas receita = this.bs.getInsumos(name, animal); 
			this.success(receita);
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
	}
		
	@Get("/getNameRations")
	@NoCache
	public void listNamesRations(String animal)
	{
		try {
			List<Receitas> receita = this.bs.listTypeRationEspe(animal); 
			this.success(receita, (long) receita.size());
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
		
	}
	
	@Get("/getAllInsumos")
	@NoCache
	public void listAllInsumos()
	{
		try {
			List<Receitas> receita = this.bs.listTypeRations(); 
			this.success(receita, (long) receita.size());
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
	}
	
	@Get("/getProdutions")
	@NoCache
	public void ProductionsList(String animal)
	{
		try {
			List<Produtions> produtions = this.bs.ProdutionsList(); 
			this.success(produtions, (long) produtions.size());
		}
		catch(Throwable ex) {
			this.fail(ex.getMessage());
		}
	}
	
	@Post(value="/editProduction")
	@NoCache
	public void editProduction(Long id,  
			Double insumo1, Double insumo2, Double insumo3, Double insumo4, Double insumo5, 
			Double insumo6, Double insumo7, Double insumo8, Double insumo9, Double insumo10, 
			Double insumo11, Double insumo12, Double qtd_final) {
		this.bs.updateProdution(id, insumo1, insumo2, insumo3, insumo4, insumo5,
				insumo6, insumo7, insumo8, insumo9, insumo10, insumo11, insumo12, qtd_final);
		this.result.redirectTo(IndexController.class).index();
	}
	
	@Get(value="/disableProduction")
	@NoCache
	public void disableProduction(Long id)
	{
		Produtions prod = this.bs.disableProduction(id);
		Receitas receita = this.bs.getInsumos(prod.getName_ration(), prod.getType_animal()); 
		
		double[] qtdInputs;
		qtdInputs = new double[12];
		qtdInputs[0] = prod.getInsumo1();
		qtdInputs[1] = prod.getInsumo2();
		qtdInputs[2] = prod.getInsumo3();
		qtdInputs[3] = prod.getInsumo4();
		qtdInputs[4] = prod.getInsumo5();
		qtdInputs[5] = prod.getInsumo6();
		qtdInputs[6] = prod.getInsumo7();
		qtdInputs[7] = prod.getInsumo8();
		qtdInputs[8] = prod.getInsumo9();
		qtdInputs[9] = prod.getInsumo10();
		qtdInputs[10] = prod.getInsumo11();
		qtdInputs[11] = prod.getInsumo12();
		
		String[] names;
		names = new String[12];
		names[0] = receita.getInsumo1();
		names[1] = receita.getInsumo2();
		names[2] = receita.getInsumo3();
		names[3] = receita.getInsumo4();
		names[4] = receita.getInsumo5();
		names[5] = receita.getInsumo6();
		names[6] = receita.getInsumo7();
		names[7] = receita.getInsumo8();
		names[8] = receita.getInsumo9();
		names[9] = receita.getInsumo10();
		names[10] = receita.getInsumo11();
		names[11] = receita.getInsumo12();	
		
		for (int i = 0; i < 12; i++)
		{
			if (!names[i].equals("None")) {
				this.bs4.deleteOutput(id, names[i]);
				this.bs3.deleteOutput(names[i], qtdInputs[i]);
				this.bs2.deleteOutput(names[i], qtdInputs[i]);
			}
		}
		
		
		this.success(true);
	}
	
	@Post(value="/editTypeRation")
	@NoCache
	public void editTypeRation(String name_ration, String insumo1, String insumo2, String insumo3, String insumo4, String insumo5, 
			String insumo6, String insumo7, String insumo8, String insumo9, String insumo10, String insumo11, String insumo12){	
		
		this.bs.doEditType(name_ration, insumo1, insumo2,  insumo3,  insumo4, insumo5, 
				 insumo6,  insumo7,  insumo8, insumo9, insumo10,  insumo11,  insumo12);
		this.result.redirectTo(IndexController.class).index();
	}
	
	
	
}
