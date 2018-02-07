package br.edu.ifc.concordia.inf.zoo.factory;

import javax.annotation.Priority;
import javax.enterprise.inject.Alternative;
import javax.interceptor.Interceptor;

import br.com.caelum.vraptor.Convert;
import br.com.caelum.vraptor.converter.Converter;

@Convert(Double.class)
@Alternative
@Priority(Interceptor.Priority.APPLICATION)
public class DefaultDoubleConverter implements Converter<Double> {

	@Override
	public Double convert(String value, Class<? extends Double> type) {
		return Double.parseDouble(value);
	}
}
