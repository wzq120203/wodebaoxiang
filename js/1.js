window.onload=function(){

	var a_img2=document.getElementById('a_img2');
	var a_img1=document.getElementById('a_img1');
	var a_img=document.getElementById('a_img');

 a_img2.onclick=function () {
 	a_img2.style.cssText='background: url(http://10.80.20.5:8085/html5%E4%B8%80%E7%8F%AD/chest-images/%E5%BD%93%E5%A4%A9%E8%B4%AD%E7%89%A9%E5%B0%B1%E9%80%81%E5%AE%9D%E7%AE%B1%E5%8A%A8%E6%80%81.gif) no-repeat;background-size: 100%;width: 1.324444rem;height: 1.066667rem;';
 }
 a_img1.onclick=function () {
 	a_img1.style.cssText='background: url(http://10.80.20.5:8085/html5%E4%B8%80%E7%8F%AD/chest-images/%E5%BF%83%E6%84%BF%E5%AE%9D%E7%AE%B1%E5%8A%A8%E6%80%81.gif) no-repeat;background-size: 100%;width: 1.2rem;height: 1.066667rem;';
 }
 a_img.onclick=function () {
 	a_img.style.cssText='display: block;float: right;background: url("http://10.80.20.5:8085/html5%E4%B8%80%E7%8F%AD/chest-images/%E5%BD%93%E5%A4%A9%E8%B4%AD%E7%89%A9%E5%B0%B1%E9%80%81%E5%AE%9D%E7%AE%B1%E5%8A%A8%E6%80%81.gif") no-repeat; width: 1.351111rem; height: 9.893333rem; background-size: 100%; margin-right: 0.302222rem;margin-top: 0.133333rem;';
 }




	var change=document.getElementById("change")
	var prev=document.getElementById('prev')
	var next=document.getElementById('next')
	var box=document.getElementById('box')
	var picture=document.querySelector('.picture')
	var inputs=document.querySelectorAll('#ind span')
	var wrap=document.querySelector('.wrap ul')
	var divs=document.querySelectorAll('.wrap ul li')
	var oLi=document.getElementById('li');
	var oImgs=box.getElementsByTagName('img');




for (var i = 0; i < oImgs.length; i++) {
	oImgs[i].onclick=function(){
		this.src = this.src.replace("png","gif");//点击宝箱后更换成gif图
		
			setTimeout(function(){
			for (var i = 0; i < oImgs.length; i++) {
				oImgs[i].src=oImgs[i].src.replace("gif","png");
				}
			},2000);
		
	}
}



	wrap.style.width=divs.length*box.offsetWidth+'px';
	var timer=null;
	var index=0;
	
//左移动--------
	next.onclick=function () {
		clearTimer();
		nextFn();
	}
	
//左移动---封装函数---------------
	function nextFn() {
		index++;
		if (index>divs.length-1) {
			index=0;
			
		} 
			wrap.style.left=-index*oLi.offsetWidth+'px';	
			for (var i=0;i< inputs.length;i++) {
					inputs[i].className="";
				}
			inputs[index].className="color_red";
	}
	
	function clearTimer() {
		clearInterval(timer);
		
		timer=setInterval(function () {
			nextFn();

		},30000);
	};
	clearTimer();
//右移动----------封装函数
prev.onclick=function () {
	prevFn();
};
function  prevFn() {
		index--;
		if (index<0) {
			index=divs.length-1;
		}
		wrap.style.left=-index*oLi.offsetWidth+'px';
	}
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].index=i
		inputs[i].onclick=function () {
			index=this.index;
			wrap.style.left=-this.index*oLi.offsetWidth+'px';			
			clearTimer();
			for (var i=0;i< inputs.length;i++) {
					inputs[i].className="";
				}
			inputs[index].className="color_red";

		}

	}

picture.onmouseenter=function(){
	
	// prev.style.opacity='1';
	next.style.opacity='1';
}
picture.onmouseleave=function () {
	
	// prev.style.opacity='0';
	next.style.opacity='0';
	
}
wrap.onmouseenter=function () {
	clearInterval(timer)

}
wrap.onmouseleave=function () {
	clearTimer();
	
}






















}




















