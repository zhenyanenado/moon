var grids = [];

	for(var i=1; i<=7; i++){
		grids[i] = document.getElementById('grid' + i);

			var q = grids[i].style;
				q.transition = 'all ease 1s';
	}

var number = 1;
var int1 = setInterval(()=>{

	document.getElementById('grid'+number).style.opacity = 1;

		if(number<=7){
			number++;
		}

		if(number==8){
			clearInterval(int1)
		}

	}, 250)

var hide = setTimeout(function(){

	for(var p = 1; p<=7; p++){
		document.getElementById('grid'+p).style.opacity = 0;
		document.getElementById('pers').style.opacity = 1;
	}

}, 2000)

var hide2 = setTimeout(function(){

	document.body.style.background = 'white';

}, 3000)

var isKeydown = false;
var position = 20;

function upper(){
		pers.style.top = position + 'px';
		isKeydown = true;
	}

function lower(){
	if(isKeydown){
		setTimeout(function(){
			position = 350;
			pers.style.top = position + 'px';
			position = -50;
	}, 500);

	}
}

function newEl(){

	let grid = document.getElementById('grid');
	let pos = 1000;
	let time = 1000;

	const el = document.createElement('div');
		el.id='enemy';
		el.style.width = '50px';
		el.style.height = '50px';
		el.style.background = 'black';
		el.style.position = 'fixed';
		el.style.left = pos + 'px';
		el.style.top = 300 + 'px';

		grid.append(el)

var move = setInterval(function(){
	pos-=10;

		el.style.left = pos + 'px';

		let posPers = document.getElementById('pers').style.top;
		let posEnemy = document.getElementById('enemy').style.left;

		if(pos == 100){
			newEl();
		}

	}, 50)

}


newEl();

document.addEventListener('touchstart', upper);
document.addEventListener('touchend', lower);