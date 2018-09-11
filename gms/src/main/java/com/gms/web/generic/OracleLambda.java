package com.gms.web.generic;

import java.util.function.Consumer;
import java.util.function.Predicate;

/*
이미 만들어져있다?
Consumer<T> void accept(T t) / add
Function<T,R> R apply(T t) / 리턴타입이 R 파라미터가 T / R
Predicate<T> boolean test(T t) / Login
Supplier<T> T get() / count
UnaryOperator<T> static <T> UnaryOperator<T> identity()
 */
public class OracleLambda {
	public static void main(String[] args) {
		/*Predicate<String> p = s -> s.length() == 0;
		String x = "";
		String y = "hello";
		String r = (p.test(y)) ? "NULL":"NOT NULL";
		System.out.println(r);*/
		/*Predicate<String> p = s -> s.length() == 0;
		String x = "";
		String y = "hello";
		String r = (p.test(y)) ? "NULL" : "NOT NULL";
		System.out.println(r);*/
		Consumer<String> con = t -> System.out.println(t+"10");
		con.accept("10");
		
	}
}

