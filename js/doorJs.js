$().ready(function(){
	var doorNu = 0 ;
	var imgNu = 1;
	var imgMax = 3;
	var clickNum = 0;
	var open = false;
		$('.logo').bind({
			hover:function(){
				$('#logo').css("background-image","url(img/dogeo.png)");
				},
			mouseleave:function(){
				$('#logo').css("background-image","url(img/doge.png)");
				},
			click:function(){
				if(clickNum<15){
					if(clickNum===1){
						 document.getElementById("tip").innerHTML = "是不是眼睛花了 ，这都点不到么？";
					}
					if(clickNum===5){
						document.getElementById("tip").innerHTML = "额 ，我觉得你需要休息一下...";
					}
					if(clickNum===9){
						document.getElementById("tip").innerHTML = "我家的狗狗可能怕生...";
					}
					if(clickNum===13){
						document.getElementById("tip").innerHTML = "坚持会 ！它快累了。";
					}
					var _r = Math.random();
					var _t = Math.random();
					if(_r<0.05||_r>0.95){
						_r = 0.15;
					}
					if(_t<0.05||_t>0.95){
						_t = 0.35;
					}
					var _rp = (_r * 100).toFixed(2) + "%";
					var _tp = (_t * 100).toFixed(2) + "%";
					$('#logo').css({"right":_rp});
					$('#logo').css({"top":_tp});
					clickNum++;
				}else{
					document.getElementById("tip").innerHTML = "";
					if(clickNum===16){
						open = true;
					}
					$('#logo').css({"right":"45%"});
					$('#logo').css({"top":"50%"});
					clickNum++;
				}
				if(doorNu===1&&open){
					doorNu = 0 ;
				$('#logo').animate({top:"+50%"},1500);
				$('#logo').rotate( {angle: 0, animateTo: 360},1500);
				$('#left').show('slide',{direction:'left'},2000);
				$('#right').show('slide',{direction:'right'},2000);	
				$('#button').css({"display":"none"});
				setTimeout(function(){parent.location.reload();},2000);
				return false;
				}
				if(open){
				$('#logo').animate({top:"+50%"},1500);
				$('#logo').rotate( {angle: 0,animateTo: 360},1500);
				$('#left').hide('slide',{direction:'left'},2000);
				$('#right').hide('slide',{direction:'right'},2000);
				$('#logo').animate({top:"+92%"},1500);
				$('#button').css({"display":"block"});
				doorNu = 1;
				return false;
				}
				}
			});
		$('#button').click(function(){
			imgNu++;
			if(imgNu>imgMax)
			{
				imgNu = 1;
			}
			if(imgNu===1){
				$('#Div3').animate({opacity:"0"},1000,function(){$('#Div3').css({"display":"none"});
					$('#Div1').css({"display":"block"});
					$('#Div1').rotate( {angle: 0, animateTo: 720},800);
					$('#Div1').animate({opacity:"1"},1000);
				});
				$('#Div3').rotate( {angle: 0, animateTo: 720},800);
			}
			if(imgNu===2){
				$('#Div1').animate({opacity:"0"},1000,function(){$('#Div1').css({"display":"none"});
					$('#Div2').css({"display":"block"});
					$('#Div2').rotate( {angle: 0, animateTo: 720},800);
					$('#Div2').animate({opacity:"1"},1000);
				});
				$('#Div1').rotate( {angle: 0, animateTo: 720},800);
			}
			if(imgNu===3){
				//$('#Div2').animate({opacity:"0"},1000,function(){$('#Div2').css({"display":"none"});
					//$('#Div3').css({"display":"block"});
					//$('#Div3').rotate( {angle: 0, animateTo: 720},800);
					//$('#Div3').animate({opacity:"1"},1000);
				//});
				//$('#Div2').rotate( {angle: 0, animateTo: 720},800);
				self.location = "vin129.html"; 
			}
		});
			
})