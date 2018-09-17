"use strict";
var pro = pro||{};

pro = {
	init : x =>{
		pro.test.onCreate();
	}
}

pro.test = {
	onCreate : ()=>{
		$('<h3>').html('테스트입니다.').appendTo($('#wrapper'));
		$('<button>')
		.arr
		.html('나는버튼!!').appendTo($('#wrapper'));
		
		
	}
}