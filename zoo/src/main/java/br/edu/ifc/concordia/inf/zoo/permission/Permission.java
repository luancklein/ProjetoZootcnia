package br.edu.ifc.concordia.inf.zoo.permission;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)

public @interface Permission {

	UserRoles value() default UserRoles.ADMIN;
}
