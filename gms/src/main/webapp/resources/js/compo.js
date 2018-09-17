"use strict"
//콜백 공간은 비동기의 공간이기떄문에 호출시 
//콜백 함수내의 전역변수가 생기지만 클릭하지않으면 공간이 생기지 않아 메모리 관리에 효율적이다.
// 다음 화면으로 넘어갈시 해당 전역변수는 사라진다. 
var ui = {
	anchor : x=> {return $('<a/>').attr({href : '#'}).html('x.txt');}
}
let anchor = $('<a/>')
	.attr({href : '#'})
	.html('등차수열의 합')