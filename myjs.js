function opendiv(num){
	var div=document.getElementsByClassName("div");
	for(var i=0;i<div.length;i++){
		if(i!=num)
			div[i].style.display="none";
		div[num].style.display="block";
	}
	var maindiv=document.getElementsByClassName("maindiv");
	for(var i=0;i<maindiv.length;i++)
		maindiv[i].style.display="none";
	var table=document.getElementById("table");
	table.style.display="inline-block";
}
function openmain(num){
	var detail=document.getElementsByClassName(num);
	for(i=0;i<detail.length;i++){
		detail[i].open=true;
	}
	opendiv(num);
}
function opensub(main_num,sub_num){
	opendiv(main_num);
	var details=document.getElementsByClassName(main_num);
	for(i=0;i<details.length;i++){
		if(i!=sub_num)
			details[i].open=false;
		details[sub_num].open=true;
	}
}
/*3초 후 안랩 공식 사이트를 새 윈도우 창에 출력*/
function site1(time){
	timerID=setTimeout("load('https://www.ahnlab.com/kr/site/main.do')",time);
}
/*3초 후 안랩 기업 사이트를 새 윈도우 창에 출력*/
function site2(time){
	timerID=setTimeout("load('https://company.ahnlab.com/kr/index.do')",time);
}
/*타이머 취소*/
function cancel(){
	if(timerID!=null)
		clearTimeout(timerID);
}
/*새 윈도우에 해당 url를 출력*/
function load(url){
	var win=window.open();
	win.location=url;
}
var canvas,context;

function init(){
	canvas=document.getElementById("myCanvas");
	context=canvas.getContext("2d");
	canvas.addEventListener("mousemove",function(e){move(e)},false);
	canvas.addEventListener("mousedown",function(e){down(e)},false);
	canvas.addEventListener("mouseup",function(e){up(e)},false);
	canvas.addEventListener("mouseout",function(e){out(e)},false);
}

var startX=0,staryY=0;
var drawing=false;

function draw(curX,curY){
	context.beginPath();
	context.moveTo(startX,startY);
	context.lineTo(curX,curY);
	context.stroke();
}
function down(e){
	context.lineWidth=document.getElementById("lineWidth").value;
	context.strokeStyle=document.getElementById("textcolor").value;
	startX=e.offsetX;
	startY=e.offsetY;
	drawing=true;
}
function up(e){
	drawing=false;
}
function move(e){
	if(!drawing)return;
	var curX=e.offsetX,curY=e.offsetY;
	draw(curX,curY);
	startX=curX;
	startY=curY;
}
function out(e){drawing=false;}
function erase(){
	var canvas=document.getElementById("myCanvas");
	var context=canvas.getContext("2d");
	context.clearRect(0,0,canvas.width,canvas.height);
	context.beginPath();
}
function change(image){
	document.getElementById("image").src=image;
}
/*1~9 사이의 랜덤 정수 생성*/
function ranint(){
	return Math.floor(Math.random()*9)+1;
}

function insite(){
	var question=ranint()+"*"+ranint();
	var num=new Array();
	num=question.split('*');
	var user=prompt(question+"의 정답을 맞추세요. 정답 맞추면 홈페이지 사용이 가능합니다.");
	if(user==null){
		alert('취소하셨습니다.');
		insite();
	}

	else{
		var answer=new String(num[0]*num[1]);
		if(answer==user)
			alert('정답입니다!');

		else{
			alert('정답이 아닙니다. 문제를 다시 출제하겠습니다.');
			insite();
		}
	}
}
