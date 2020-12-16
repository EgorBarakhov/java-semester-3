// document.addEventListener('DOMContentLoaded', function() {

// 	document.getElementById('left-eyeball').addEventListener('onmousemove', move());
// 	document.getElementById('right-eyeball').addEventListener('onmousemove', move());
// 	left_eye_coords = getCoords(document.getElementById('left-eye'));
// 	left_eye_center_top_coords = left_eye_coords.top + 50;
// 	left_eye_center_left_coords = left_eye_coords.left + 50;
// 	console.log(left_eye_center_top_coords);
// 	console.log(left_eye_center_left_coords);
// 	right_eye_coords = getCoords(document.getElementById('right-eye'));
// 	right_eye_center_top_coords = right_eye_coords.top + 50;
// 	right_eye_center_left_coords = right_eye_coords.top + 50;
// 	console.log(right_eye_center_top_coords);
// 	console.log(right_eye_center_left_coords);

// 	function move() {

// 	}

// 	function getCoords(elem) {
//   		var box = elem.getBoundingClientRect();

//   		return {
//     		top: box.top + pageYOffset,
//     		left: box.left + pageXOffset
//   		};
// 	}

// 	function getPosition(e){
// 		if (!e) {
// 			e = window.event;		
// 		}

// 		x = e.pageX;
// 		y = e.pageY;
		
// 		return {
// 			x: x, 
// 			y: y
// 		}
// 	}
// })

document.addEventListener('DOMContentLoaded', function() {
	document.onmousemove = function(event) {
		x = event.x - 250
		y = event.y - 150
		console.log(x + ' ' + y)
		document.getElementById('left-eye').style.transform = 'rotate(' + 57.2958 * arcctg(x, y) + 'deg)';
		document.getElementById('right-eye').style.transform = 'rotate(' + 57.2958 * arcctg(x - 400, y) + 'deg)';
		function arcctg(x, y) {
			if (y > 0) {
				return Math.PI / 2 - Math.atan(x / y)
			} else if (x < 0) {
				return Math.PI + Math.atan(y / x)
			} else {
				return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y))
			};

		}
	}
})