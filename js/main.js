$(document).ready(function(){
	$(window).bind('scroll',function(e){
   		parallaxScroll();
   	});
 
   	function parallaxScroll(){
   		var scrolledY = $(window).scrollTop();
        
        ////show scroll position //////
        $('#scrollPosition').html('<p>'+scrolledY+'</p>');
        
        
		///////scroll srollbaby////////
		$('#scrollBaby').css('transform','translateY('+((scrolledY*0.3))+'px)');
		///////scroll pot////////
		var tranfoPot = -800 + scrolledY*0.6857142857;
		if(tranfoPot >= 0)
		{
			tranfoPot = 0;
		}
		$('.pot').css('transform','translateY('+tranfoPot+'px)');
		
		var opapot = scrolledY*0.001142857;
		if(opapot >= 1)
		{
			opapot = 1;
		}
		$('.pot').css('opacity', opapot);
		
		///////scroll shadow///////
		var opaShadow = scrolledY*0.00007;
		if(opaShadow >= 1)
		{
			opaShadow = 1;
		}
		$('.shadow').css('opacity', opaShadow);
		
		var scalShadow = 0.6;
		if(opaShadow >= 0.200000000000001)
		{
			scalShadow = 0.6 + (scrolledY-3000)*0.0004;
		}
		if(scalShadow >=1 )
		{
			scalShadow = 1;
		}
		$('.shadow').css('transform','scale('+scalShadow+')');
        
        ////// scroll trunk ////////////
        var opaTrunk = 0;
        if(scrolledY > 1600)
        {
            opaTrunk = opaTrunk + (scrolledY - 1600)*0.0025;
        }
        if(opaTrunk >= 1)
            opaTrunk = 1;
        $('.trunk').css('opacity',opaTrunk);
        
        var scaleTrunk_1 = 0.3;
        var scaleTrunk_2 = 0.6;
        if(scrolledY > 2000)
        {
            scaleTrunk_1 = scaleTrunk_1 + (scrolledY - 2000)*0.00014;
            scaleTrunk_2 = scaleTrunk_2 + (scrolledY - 2000)*0.00008;
        }
        if(scaleTrunk_1 >= 1 && scaleTrunk_2 >= 1)
        {
            scaleTrunk_1 = 1;
            scaleTrunk_2 = 1;
        }
        
        $('.trunk').css('transform','scale('+scaleTrunk_1+','+ scaleTrunk_2 +')');
        
        ////////////scroll tree 1 /////////
        var opaTree1 = 0;
        var scaleTree1 = 0.3;
        var bottomTree1 = 71;
        if(scrolledY > 1600)
        {
            opaTree1 = opaTree1 + (scrolledY - 1600)*0.0025;
            scaleTree1 = scaleTree1 - (scrolledY - 1600)*0.000125;
            bottomTree1 = bottomTree1 + (scrolledY - 1600)*0.07;
        }
        if(opaTree1 >= 1)
            opaTree1 = 1;
        if(scrolledY > 2000)
        {
            scaleTree1 = scaleTree1 + (scrolledY - 2000)*0.000275;
        }
        if(scaleTree1 >= 1)
            scaleTree1 = 1;
        if(bottomTree1 >= 426)
            bottomTree1 = 426;
        $('.tree1').css('opacity',opaTree1);
        $('.tree1').css('transform','scale('+scaleTree1+')');
        $('.tree1').css('bottom',bottomTree1 + 'px');
        
        /////////////scroll tree2//////////
        var opaTree2 = 0;
        var scaleTree2 = 0.3;
        var bottomTree2 = 71;
        if(scrolledY > 2000)
        {
            opaTree2 = opaTree2 + (scrolledY - 2000)*0.00471698113207547;
            scaleTree2 = scaleTree2 + (scrolledY - 2000)*0.00014;
            bottomTree2 = bottomTree2 + (scrolledY - 2000)*0.0505;
        }
        if(opaTree2 >= 1)
            opaTree2 = 1;
        if(scaleTree2 >= 1)
            scaleTree2 = 1;
        if(bottomTree2 >= 309)
            bottomTree2 = 309;
        $('.tree2').css('opacity',opaTree2);
        $('.tree2').css('transform','scale('+scaleTree2+')');
        $('.tree2').css('bottom',bottomTree2+'px');
        
        /////////////scroll tree3//////////
        var opaTree3 = 0;
        var scaleTree3 = 0.3;
        var bottomTree3 = 71;
        if(scrolledY > 2500)
        {
            opaTree3 = opaTree3 + (scrolledY - 2500)*0.00471698113207547;
            scaleTree3 = scaleTree3 + (scrolledY - 2500)*0.000159;
            bottomTree3 = bottomTree3 + (scrolledY - 2500)*0.0325;
        }
        if(opaTree3 >= 1)
            opaTree3 = 1;
        if(scaleTree3 >= 1)
            scaleTree3 = 1;
        if(bottomTree3 >= 205)
            bottomTree3 = 205;
        $('.tree3').css('opacity',opaTree3);
        $('.tree3').css('transform','scale('+scaleTree3+')');
        $('.tree3').css('bottom',bottomTree3+'px');
        
        /////////////scroll tree4//////////
        var opaTree4 = 0;
        var scaleTree4 = 0.3;
        if(scrolledY > 4200)
        {
            opaTree4 = opaTree4 + (scrolledY - 4200)*0.00371698113207547;
            scaleTree4 = scaleTree4 + (scrolledY - 4200)*0.00025;
        }
        if(opaTree4>= 1)
            opaTree4 = 1;
        if(scaleTree4 >= 1)
            scaleTree4 = 1;
        $('.tree4').css('opacity',opaTree4);
        $('.tree4').css('transform','scale('+scaleTree4+')');
        
        /////////////scroll vrthythm//////////
        var opaVrthythm = 0;
        if(scrolledY > 7200)
        {
            opaVrthythm = opaVrthythm + (scrolledY-7200)*0.002;
        }
        if(opaVrthythm >= 1)
            opaVrthythm = 1;
        if(scrolledY > 7900)
        {
            opaVrthythm = opaVrthythm - (scrolledY-7900)*0.002;
        }
        if(opaVrthythm <= 0)
            opaVrthythm = 0;
        $('.vrthythm').css('opacity',opaVrthythm);
        
        //////////////////////////////////////////////
        //////////////// slide 2 /////////////////////
        //////////////////////////////////////////////
        
        
        //////////////// bcg /////////////////////
        var r = 255
        var b = 255;
        var g = 255;
        if(scrolledY > 9600)
        {
            r = r - parseInt((scrolledY-9600)*0.1);
            b = b - parseInt((scrolledY-9600)*0.01);
            g = g - parseInt((scrolledY-9600)*0.01);
        }
        if(r<=105 && b<=240 && g<=240)
        {
            r=105;
            b=240;
            g=240;
        }
        $('.bcg').css('background-color', 'rgb('+r+', '+b+', '+g+')');
        
        /////////////lights/////////////////
        var opaLights = 0;
        if(scrolledY > 11000)
            opaLights = opaLights + (scrolledY - 11000)*0.001;
        if(opaLights >= 1)
            opaLights = 1;
        $('#lights').css('opacity',opaLights);
        
        /////////////star////////////////////
        var opaStar = 0;
        var scaleStar = 0.6;
        if(scrolledY > 14900)
            opaStar = opaStar + (scrolledY - 14900)*0.004;
        if(opaStar >= 1)
            opaStar = 1;
        if(scrolledY > 14900)
            scaleStar = scaleStar + (scrolledY - 14900)*0.0004;
        
        if(scrolledY == 15590)
            $('#star').css('transform','scale(0.82)');
        if(scaleStar > 1)
            scaleStar = 1;
        $('#star').css('opacity',opaStar);
        $('#star').css('transform','scale('+scaleStar+')');
        if(scrolledY == 15550)
            $('#star').css('transform[bounce]','scale(0.98)');
        
        /////////////bauble////////////////////
        
        var opaBauble = 0;
        var translate15 = -780;
        var translate14 = -900;
        var translate13 = -820;
        var translate12 = -820;
        var translate11 = -900;
        var translate10 = -780;
        var translate9 = -800;
        var translate8 = -900;
        var translate7 = -820;
        var translate6 = -750;
        var translate5 = -690;
        var translate4 = -580;
        var translate3 = -650;
        var translate2 = -620;
        var translate1 = -600;
        if(scrolledY > 12000)
        {
            opaBauble += (scrolledY-12000)*0.004;
            translate15 += (scrolledY - 12000)*0.78;
            translate14 += (scrolledY - 12000)*0.88;
            translate13 += (scrolledY - 12000)*0.78;
            translate12 += (scrolledY - 12000)*0.78;
            translate11 += (scrolledY - 12200)*1;
            translate10 += (scrolledY - 12200)*0.7;
            translate9 += (scrolledY - 12200)*0.7;
            translate8 += (scrolledY - 12200)*0.7;
            translate7 += (scrolledY - 12200)*0.7;
            translate6 += (scrolledY - 12200)*0.7;
            translate5 += (scrolledY - 12200)*0.4;
            translate4 += (scrolledY - 12200)*0.4;
            translate3 += (scrolledY - 12200)*0.4;
            translate2 += (scrolledY - 12200)*0.4;
            translate1 += (scrolledY - 12200)*0.4;
        }
        if(opaBauble >= 1)
            opaBauble = 1;
        if(translate15 >= 0)
            translate15 = 0;
        if(translate14 >= 0)
            translate14 = 0;
        if(translate13 >= 0)
            translate13 = 0;
        if(translate12 >= 0)
            translate12 = 0;
        if(translate11 >= 0)
            translate11 = 0;
        if(translate10 >= 0)
            translate10 = 0;
        if(translate9 >= 0)
            translate9 = 0;
        if(translate8 >= 0)
            translate8 = 0;
        if(translate7 >= 0)
            translate7 = 0;
        if(translate6 >= 0)
            translate6 = 0;
        if(translate5 >= 0)
            translate5 = 0;
        if(translate4 >= 0)
            translate4 = 0;
        if(translate3 >= 0)
            translate3 = 0;
        if(translate2 >= 0)
            translate2 = 0;
        if(translate1 >= 0)
            translate1 = 0;
        $('#bauble1').css('opacity',opaBauble);
        $('#bauble2').css('opacity',opaBauble);
        $('#bauble3').css('opacity',opaBauble);
        $('#bauble4').css('opacity',opaBauble);
        $('#bauble5').css('opacity',opaBauble);
        $('#bauble6').css('opacity',opaBauble);
        $('#bauble7').css('opacity',opaBauble);
        $('#bauble8').css('opacity',opaBauble);
        $('#bauble9').css('opacity',opaBauble);
        $('#bauble10').css('opacity',opaBauble);
        $('#bauble11').css('opacity',opaBauble);
        $('#bauble12').css('opacity',opaBauble);
        $('#bauble13').css('opacity',opaBauble);
        $('#bauble14').css('opacity',opaBauble);
        $('#bauble15').css('opacity',opaBauble);
        
        $('#bauble15').css('transform','translateY('+translate15+'px)');
        $('#bauble14').css('transform','translateY('+translate14+'px)');
        $('#bauble13').css('transform','translateY('+translate13+'px)');
        $('#bauble12').css('transform','translateY('+translate12+'px)');
        $('#bauble11').css('transform','translateY('+translate11+'px)');
        $('#bauble10').css('transform','translateY('+translate10+'px)');
        $('#bauble9').css('transform','translateY('+translate9+'px)');
        $('#bauble8').css('transform','translateY('+translate8+'px)');
        $('#bauble7').css('transform','translateY('+translate7+'px)');
        $('#bauble6').css('transform','translateY('+translate6+'px)');
        $('#bauble5').css('transform','translateY('+translate5+'px)');
        $('#bauble4').css('transform','translateY('+translate4+'px)');
        $('#bauble3').css('transform','translateY('+translate3+'px)');
        $('#bauble2').css('transform','translateY('+translate2+'px)');
        $('#bauble1').css('transform','translateY('+translate1+'px)');
        
        /////////////candy////////////////////
        
        var translateCandy4 = -710;
        var rotateCandy4 = -25;
        
        if(scrolledY > 13600)
        {
            translateCandy4 += (scrolledY - 13600)*1.2;
            rotateCandy4 += (scrolledY - 13600)*0.1;
        }
        if(translateCandy4 >= 0)
            translateCandy4 = 0;
        if(rotateCandy4 >= 35)
            rotateCandy4 = 35;
        
        $('#candy4').css('transform','translateY('+translateCandy4+'px) rotate( ' + rotateCandy4 + 'deg)');
        
        var translateCandy3 = -790;
        
        if(scrolledY > 14100)
        {
            translateCandy3 += (scrolledY - 14200)*1.5;
        }
        if(translateCandy3 >= 0)
            translateCandy3 = 0;
        
        $('#candy3').css('transform','translateY('+translateCandy3+'px)');
        
        var translateCandy2 = -710;
        var rotateCandy2 = -45;
        
        if(scrolledY > 14600)
        {
            translateCandy2 += (scrolledY - 14600)*3.2;
            rotateCandy2 += (scrolledY - 14600)*2;
        }
        if(translateCandy2 >= 0)
            translateCandy2 = 0;
        if(rotateCandy2 >= 5)
            rotateCandy2 = 5;
        
        $('#candy2').css('transform','translateY('+translateCandy2+'px) rotate( ' + rotateCandy2 + 'deg)');
        
        var translateCandy1 = -780;
        var rotateCandy1 = -30;
        
        if(scrolledY > 14600)
        {
            translateCandy1 += (scrolledY - 14600)*5.2;
            rotateCandy1 += (scrolledY - 14600)*2;
        }
        if(translateCandy1 >= 0)
            translateCandy1 = 0;
        if(rotateCandy1 >= 5)
            rotateCandy1 = 5;
        
        $('#candy1').css('transform','translateY('+translateCandy1+'px) rotate( ' + rotateCandy1 + 'deg)');
        
        ///////////////////////present////////////////////
        var opaPre3 = 0;
        var scalePre3 = 0.6;
        if(scrolledY >= 17000)
            opaPre3 = 1;
        $('#present3').css('opacity',opaPre3);
        if(scrolledY >=17100)
            scalePre3 += (scrolledY - 17100)*0.0006;
        if(scalePre3 >= 1)
            scalePre3 =1;
        $('#present3').css('transform','scale('+scalePre3+')');
        
        var opaPre5 = 0;
        var scalePre5 = 0.6;
        if(scrolledY >= 17700)
            opaPre5 += (scrolledY - 17700)*0.005;
        if(opaPre5 >= 1)
            opaPre5 =1;
        $('#present5').css('opacity',opaPre5); 
        if(scrolledY >=17900)
            scalePre5 += (scrolledY - 17900)*0.0006;
        if(scalePre5 >= 1)
            scalePre5 =1;
        
        $('#present5').css('transform','scale('+scalePre5+')');
        
        var opaPre2 = 0;
        var scalePre2 = 0.6;
        if(scrolledY >= 18500)
            opaPre2 += (scrolledY - 18500)*0.005;
        if(opaPre2 >= 1)
            opaPre2 =1;
        $('#present2').css('opacity',opaPre2); 
        if(scrolledY >=18600)
            scalePre2 += (scrolledY - 18600)*0.0006;
        if(scalePre2 >= 1)
            scalePre2 =1;
        
        $('#present2').css('transform','scale('+scalePre2+')');
        
        var opaPre4 = 0;
        var scalePre4 = 0.6;
        if(scrolledY >= 19400)
            opaPre4 += (scrolledY - 19400)*0.005;
        if(opaPre4 >= 1)
            opaPre4 =1;
        $('#present4').css('opacity',opaPre4); 
        if(scrolledY >=19500)
            scalePre4 += (scrolledY - 19500)*0.0006;
        if(scalePre4 >= 1)
            scalePre4 =1;
        
        $('#present4').css('transform','scale('+scalePre4+')');
        
        var opaPre1 = 0;
        var scalePre1 = 0.6;
        if(scrolledY >= 20100)
            opaPre1 += (scrolledY - 20100)*0.005;
        if(opaPre1 >= 1)
            opaPre1 =1;
        $('#present1').css('opacity',opaPre1); 
        if(scrolledY >=20200)
            scalePre1 += (scrolledY - 20200)*0.0006;
        if(scalePre1 >= 1)
            scalePre1 =1;
        
        $('#present1').css('transform','scale('+scalePre1+')');
        
        ////////////////////bcg2//////////////////
        var widthBcg2 = 0;
        if(scrolledY >= 20900)
            widthBcg2 += (scrolledY - 20900)*0.08;
        if(widthBcg2 >= 100)
            widthBcg2 = 100;
        $('.bcg2').css('width', widthBcg2 +'%');
        
        var rotateTung = 0;
        var opaTung = 0;
        var scaleTung = 0
        if(scrolledY >= 22300)
        {
            opaTung += (scrolledY - 22300)*0.003;
            rotateTung += (scrolledY - 22300)*0.06;
            scaleTung += (scrolledY - 22300)*0.000165;
        }
        if(opaTung >= 1)
            opaTung = 1;
        if(scaleTung >= 1)
            scaleTung = 1;
        if(rotateTung >= 360)
            rotateTung = 360;
        $('#tung').css('transform','scale('+scaleTung+') rotate( ' + rotateTung + 'deg)');
        $('#tung').css('opacity', opaTung);
   	}
 
});