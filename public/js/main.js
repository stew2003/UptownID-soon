$(document).ready(function(){
	generate(document.getElementsByClassName('icon').length, 23);
});

var setup = function(n, r, theta, offset) {
	var icons = document.getElementsByClassName('icon');
	for(var i = 0; i<icons.length; i++){
		var x =  (r * (Math.cos(theta[i] + offset)));
		var y =  (r * (Math.sin(theta[i] + offset)));

		// translate the element
	    icons[i].style.webkitTransform =
	    icons[i].style.transform =
	      'translate(50vw, 50vh) translate(-50%, -50%) translate(' + x + 'vw, ' + y + 'vw)';

	}
	setTimeout(function(){
		setup(n, r, theta, offset+=0.005)
	}, 10);
}


var generate = function (n, r) {
	console.log('Number of icons: ' + n);
    var theta = [];
    var frags = 360 / n;
    for (var i = 0; i <= n; i++) {
        theta.push((frags / 180) * i * Math.PI);
    }
    setup(n, r, theta, 0);
}