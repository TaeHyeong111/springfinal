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
                let ques = 
                	'<h3> 시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오 </h3>'
                	+'<label for="시작값"> 시작값 </label> <input id="sta" type="text" value="">'
                	+'<label for="마지막값"> 마지막값 </label> <input id="end" type="text" value="">'
                	+'<label for="공차"> 공차 </label> <input id="d" type="text" value="">'
                	+'<button id="bt">결과보기</button>'
                	+'<h6 id="rs"></h6>'
                	
                	$('#t__r').append(ques);
                	$('#bt').click(()=>{
                	$('#rs').empty().text(($.fn.zeroChecker([
                	  $('#sta').val(),
                      $('#end').val(),
                      $('#d').val()]))?
                    		  '빈칸을 채우세요':'완성하세요'
                    );
                })
                
            }),
            $('#t__1').append('<a id = "fibonacci"><h3>피보나치<h3></a>');
            $('#fibonacci').click(e=>{
            	alert 
            }),
            $('#t__1').append('<a id = "swit"><h3>스위치<h3></a>')
            $('#swit').click(e=>{
            	let ques = '<h3>1-2+3-4...99-100 의 합을 구하시오</h3>'
            		+'<label >시작값</label> <input id="start" type="text" value="">'
            		+'<label >종료값</label> <input id="end" type="text" value="">'
            		+'<button id="bt">결과보기</button>'
            		$('#t__r').append(ques);
            	$('#bt').click(()=>{
            		let start = $('#start').val()*1;
            		let end = $('#end').val()*1;
            		let sum = 0;
            		for(let i=start;i<=end;i++){
            			if(i % 2 ==0){
            				sum += i;
            				i += 2;
            			}else{
            				sum -= i;
            				i -= 2;
            			}
            		}
            		$('#t__r').append(sum)
            	})
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
                    $.getScript($.ctx()+'/resources/js/util.js')
                    .done(x=>{console.log("실행");})
                    .fail(x=>{console.log('실패')});
                    algo.main.onCreate();
                }
        );
    }
};
algo.util = {
		onCreate : x =>{
	        $.getScript(x+'/resources/js/util.js', //외부의 js 파일을 호출 (자바의 import)
	                ()=>{
	                	$.extend(new NullChecker())
	                	algo.main.onCreate();
	                }
	        );
	    }
}