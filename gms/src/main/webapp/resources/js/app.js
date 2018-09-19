"use strict"; /*선언함으로써 에러시 넘어가지않음*/
var app = app || {};
app =(()=>{
	var init =x=>{
		console.log('Step 1'+x);
		app.router.init(x);
	};
	return {init : init};
})();
app.main=(()=>{
	var w,header,footer,content,nav,ctx,script,style,about,projects,img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w = $('#wrapper');
		header = script + '/header.js';
		content = script + '/content.js';
		nav = script + '/navigation.js';
		footer = script + '/footer.js';
		about = script + '/about.js';
		projects = script + '/projects.js';
		
		
		onCreate();
		
	}
	var onCreate =()=>{
		setContentView();
	}
	var setContentView =()=>{
		
	        $.when(
	            $.getScript($.script()+'/about.js'),
	            $.getScript($.script()+'/content.js'),
	            $.getScript($.script()+'/footer.js'),
	            $.getScript($.script()+'/header.js'),
	            $.getScript($.script()+'/navigation.js'),
	            $.getScript($.script()+'/projects.js'),
	            $.Deferred(y=>{
	                $(y.resolve);
	            })
	        ).done(z=>{
	            w.html(navigationUI()
	            		+headerUI()
	            		+aboutUI()
	            		+projectsUI()
	            		+contentUI()
	                    +footerUI()
	            );
	            $('#login_btn').click(e=>{ 
	            	app.permission.login();
	            });
	            /*$('#board').click(e=>{
	            	app.board.init();
	            })*/
	            $('#join_btn').click(e=>{
	            	app.permission.add();
	            }) 
	        })
	        .fail(x=>{
	            console.log('로드 실패');
	        })
	     };
	return {init : init};
})();
app.board = (()=>{
	var init =()=>{
		onCreate()
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		alert('Board');
		$('#header').remove();
		$('#content').empty();
		
	};
	return {init : init}
	
	var list = ()=>{
		alert('게시판')
	}
	return {init : init}
})();
app.permission = (()=>{
	var login =()=>{
		$('#header').remove();
		$('#footer').remove();
		$('#about').remove();
		$('#content').empty();
		$('#projects').remove();
		$.getScript($.script()+"/login.js", ()=>{
			$('#content').html(loginUI());
			$('#loginFormBtn').click(e=>{
				alert('ss')
				alert($.ctx())
				$.ajax({
					
					url : $.ctx() + '/member/login/',
					method : 'post',
					contentType : 'application/json',
					data : JSON.stringify({userid : $('#userid').val(), password : $('#password').val()}),
					success : d=>{ 
						if(d.ID==="WRONG"){
							alert('아이디 틀림')
						}else if(d.PW==="WRONG"){
							alert('비번 틀림')
						}else{
							alert('??')
						}
						app.router.home(d);
		
					},
					error : (m1,m2,m3)=>{
						alert('에러발생1'+m1)
						alert('에러발생2'+m2)
						alert('에러발생3'+m3)
					}
				});
			})
			
			
			/*$.ajax({ // 기본적인 ajax 형태
				url : ctx+'/algo/money/',
				method : 'post',
				contentType : 'application/json', //contenType 은 mime 타입// 
				data : JSON.stringify({money : $('#money').val()}), //Json을 자바로 인식시켜주는친구 : JSON.stringify
				success : d=>{ //d는 자바진영의 맵(data약자로 d) 
					alert('AJAX 성공이다 !!'+d.test)//키값은 맞춰주어라
				},
				error : (m1,m2,m3)=>{
					alert('에러발생1'+m1)
					alert('에러발생2'+m2)
					alert('에러발생3'+m3)*/
		})
	};
	var add =()=>{
		$('#header').remove();
		$('#footer').remove();
		$('#about').remove();
		$('#content').empty();
		$('#projects').remove();
		$.getScript($.script()+"/add.js", ()=>{
			$('#content').html(addUI());
		$('#joinFormBtn').click(e=>{
			alert('조인폼버튼')
			$.ajax({
				url : $.ctx()+"/member/add/",
				method : "post",
				contentType : "application/json",
				data : JSON.stringify({name : $('#name').val(),
									   userid : $('#userid').val(),
									   password : $('#password').val(),
									   ssn : $('#ssn').val()
									   
									   }),
				sucess : d=>{
					app.permission.login()
				},
				error : (m1,m2,m3)=>{
					alert('에러발생1'+m1)
					alert('에러발생2'+m2)
					alert('에러발생3'+m3)
				}
			})
			
		})
		})
	};
	return { login : login,
		add : add
		};
})();
	
app.router = {
	    init : x =>{
	    	console.log('eeee');
	        $.getScript(x+'/resources/js/router.js',  // $.은 JQuery 객체 
	                ()=>{
	                    $.extend(new Session(x)); // new는 session의 copy 개념임
	                    $.getScript($.ctx()+'/resources/js/util.js') //프로토타입은 : $.fn.ctx
	                    .done(x=>{console.log('실행');
	                    app.main.init();
	                    })
	                    .fail(x=>{console.log('실패')});
	                    app.main.init();
	             }
	      );
	 },
	 home : (d)=>{
		 alert("나는디!"+d)
		 $.when(
		            $.getScript($.script()+'/about.js'),
		            $.getScript($.script()+'/content.js'),
		            $.getScript($.script()+'/footer.js'),
		            $.getScript($.script()+'/header.js'),
		            $.getScript($.script()+'/navigation.js'),
		            $.getScript($.script()+'/projects.js'),
		            $.Deferred(y=>{
		                $(y.resolve);
		            })
		        ).done(z=>{
		            $('#wrapper').html(
		            		navigationUI()
		            		+headerUI()
		            		+aboutUI()
		            		+projectsUI()
		            		+contentUI()
		                    +footerUI()
		            );
		            
		            $('#login_btn').html("로그아웃").click(e=>{
		            	app.main.init()
		            })
		            $('#join_btn').html("마이페이지").click(e=>{ 
		            	app.permission.login();
		            });
		            
		            $('#join_btn').click(e=>{
		            	app.permission.add();
		            }) 
		        })
		        .fail(x=>{
		            console.log('로드 실패');
		        })
	 }
};

