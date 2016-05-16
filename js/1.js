



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
	oImgs[i].bol=1;
	oImgs[i].index=i;
	oImgs[i].timer=null;
	oImgs[i].onclick=function(){
		if (this.bol) {
			this.bol=0;
			var x=this.index;
			this.src = this.src.replace("png","gif");//点击宝箱后更换成gif图
					
						this.timer=setTimeout(function(){
							
							
								oImgs[x].src=oImgs[x].src.replace("gif","png");
								oImgs[x].bol=1;

							
						
						
						},2000);
		}
		

		
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

// picture.onmouseenter=function(){
	
// 	// prev.style.opacity='1';
// 	next.style.opacity='1';
// }
// picture.onmouseleave=function () {
	
// 	// prev.style.opacity='0';
// 	next.style.opacity='0';
	
// }
wrap.onmouseenter=function () {
	clearInterval(timer)

}
wrap.onmouseleave=function () {
	clearTimer();
	
}










































