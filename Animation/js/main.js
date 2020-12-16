document.addEventListener('DOMContentLoaded', function() {
	winXP = document.getElementById('block');
	setInterval(move, 30);
	padTop = padLeft = 0;
	isDown = isRight = true;
	function move() {
		if (isDown) {
			if (padTop != 600) {
				padTop++;
			} else {
				isDown = false;
			}
		} else {
			if (padTop != 0) {
				padTop--;
			} else {
				isDown = true;
			}
		}
		if (isRight) {
			if (padLeft != 1000) {
				padLeft++;
			} else {
				isRight = false;
			}
		} else {
			if (padLeft != 0) {
				padLeft--;
			} else {
				isRight = true;
			}
		}
		winXP.style.top = padTop + "px"
		winXP.style.left = padLeft + "px"
	}
});