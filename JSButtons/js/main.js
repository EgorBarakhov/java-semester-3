window.addEventListener('DOMContentLoaded', function() {
	let count = -1;
	buttons = document.getElementsByClassName('single-color');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			document.body.style.background = buttons[i].value;
			count = i;
		})
	}
	switcherColors = document.getElementsByClassName('switcher-colors')[0];
	switcherColors.addEventListener('click', function() {
		count++;
		count = count % 3;
		document.body.style.background = buttons[count].value;
	})
})

// $('single-color').click(function(){
// 	$(body).toggleClass()
// })