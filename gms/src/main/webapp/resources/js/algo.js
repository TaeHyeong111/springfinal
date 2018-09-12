"use strict";
var algo = algo || {};
algo = { //algo 클래스, init 메소드, x 파라미터
        init : x =>{
            algo.onCreate(x);
            algo.setContentView();
        },
        onCreate : x=>{
            algo.router.onCreate(x);
        },
        setContentView : ()=>{
            $('#wrapper').empty();
        }
};
algo.main = {
        onCreate : () =>{
            algo.main.setContentView();
        },
        setContentView : ()=>{
        	$('#wrapper').html('<h1>알고리즘</h1><h3>수 열</h3><div id="ctn">'
        	+'<table id="tbl" style="width:800px;height:300px;'
        	+'border-collapse: collapse;border; 1px solid black;margin:0 auto">'
        	+ '<tr style="border: 1px solid black;">'
        	+'<td id="t__1" style="width: 50%;border: 1px solid black;"></td>'
        	+'<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
        	+'</tr>'
        	+'</table>'
        	+'</div>');
        	
            $('#t__1').html('<h1>ALGORITHM</h1><div id="content"></div>');
            $('#t__1').append('<a id="arith"><h3>등차수열</h3></a>');
            $('#arith').click(e=>{
                alert('등차수열 선택');
            }),
            $('#t__1').append('<a id = "fibonacci"><h3>피보나치<h3></a>');
            $('#fibonacci').click(e=>{
            	alert('피보나치 선택');
            }),
            $('#t__1').append('<a id = "swit"><h3>스위치<h3></a>')
            $('#swit').click(e=>{
            	alert('스위치 선택');
            })
            $('#content').append('<a id = "factorial"><h3>팩토리얼<h3></a>')
            $('#factorial').click(e=>{
            	alert('팩토리얼 선택')
            })
        }
};
algo.series = {
        arith : x =>{

        },
        fibonacci : x =>{},
        swit : x => {},
        factorial : x => {}
};
algo.array = {
        bubble : x =>{},
        insert : x =>{},
        select : x => {},
        ranking : x =>{}
};
algo.matrix = {
        fiveBy5 : x =>{},
        sandGlass : x =>{},
        snail : x =>{},
        diamond : x =>{},
        zigzag : x =>{}
};
algo.math = {
        
};
algo.appl = {};

algo.router = {
    onCreate : x =>{
        $.getScript(x+'/resources/js/router.js', //외부의 js 파일을 호출 (자바의 import)
                ()=>{
                    $.extend(new Session(x));        //확장. JS 객체기반언어
                    algo.main.onCreate();
                }
        );
    }
};