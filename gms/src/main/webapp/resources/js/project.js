"use strict";
var pro = pro||{}

pro = {
	init : x =>{
		pro.onCreate(x)
	},
	onCreate : x =>{
		sessionStorage.setItem('ctx',x)
	}
}