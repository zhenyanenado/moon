var grids = [];

class User {
	constructor(name){
		this.name = 'adasds';
}
	login(){
		console.log(this.name);
	}
}

var us1 = new User().login();
	
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

	}

}, 2000)

var hide2 = setTimeout(function(){

	document.body.style.background = 'white';

}, 3000)