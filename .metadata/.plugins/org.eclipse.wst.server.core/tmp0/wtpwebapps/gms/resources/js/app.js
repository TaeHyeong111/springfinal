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
	            $('#add_btn').click(e=>{
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
		$.getScript($.script()+"/compo.js",()=>{ //<< 대기하고 있다가 앞녀석에 의해 작동됨 (옵저버 패턴임) 
		$.getScript($.script()+"/login.js", ()=>{
			$('#content').html(loginUI());
			ui.anchor({id :"loginFormBtn",txt:'로그인'})
			.css({"width":"300px"})
			.addClass('btn btn-primary')
			.appendTo($('#userLoginForm')) //요기수정
			.click(e=>{
				
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
							app.router.home();
						}
						
						
					},
					error : (m1,m2,m3)=>{
						alert('에러발생1'+m1)
						alert('에러발생2'+m2)
						alert('에러발생3'+m3)
					}
				});
				
			})
		})
		})
	};
	var add =()=>{
		$('#header').remove();
		$('#footer').remove();
		$('#about').remove();
		$('#content').empty();
		$('#projects').remove();
		$.getScript($.script()+"/compo.js",()=>{ //<< 대기하고 있다가 앞녀석에 의해 작동됨 (옵저버 패턴임) 
		$.getScript($.script()+"/add.js", ()=>{
			$('#content').html(addUI());
			/*$("[name='subject']") // checkbox가져오는법
			.change(function(){
				alert($(this).val());
			});*/
			ui.anchor({id :"addFormBtn",txt:'제출'})
			.css({"width":"200px"})
			.addClass('btn btn-primary')
			.appendTo($('#add_div')) //요기수정
			.click(e=>{
				e.preventDefault();
				alert('click')
				var arr = [];
				var sub = $('[name = "subject"]');
				let i ;
				let a = '';
				for (i of sub){
					if(i.checked){
						alert('선택된 과목::'+i.value);
						arr.push(i.value);
						a += i.value+','
					}
				}
				$.ajax({
					
					url : $.ctx() + '/member/add/',
					method : 'post',
					contentType : 'application/json',
					data : JSON.stringify({
						name : $('#name').val(), 
						userid : $('#userid').val(),
						password : $('#password').val(),
						ssn : $('#ssn').val(),
						teamid : $('[name = teamid]:checked').val(),
						roll : $('#roll').val(),
						subject : a
						
					}),
					success : d=>{ 
												
					},
					error : (m1,m2,m3)=>{
						alert('에러발생1'+m1)
						alert('에러발생2'+m2)
						alert('에러발생3'+m3)
					}
				});
				
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
	 home : ()=>{
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
		            
		            $('#add_btn').click(e=>{
		            	app.permission.add();
		            }) 
		        })
		        .fail(x=>{
		            console.log('로드 실패');
		        })
	 }
};

