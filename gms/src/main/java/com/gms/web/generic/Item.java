package com.gms.web.generic;

import java.util.ArrayList;
import java.util.List;
@SuppressWarnings("unchecked")
public class Item <T>{ //어떤타입이 올것을 예상하지만 사용할때 타입을 준다. 현재는 임의의 타입
	T one;
	List<T> some = new ArrayList<>();
	public T getOne() {return one;}
	public void setOne(T t) {this.one = t;}
	public T getSome() {return (T) some;}
	public void setSome(T t) {this.some = (List<T>) t;}
}
