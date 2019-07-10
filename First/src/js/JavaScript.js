var slideIndex = 1;
showSlide(slideIndex);

function plusSlide (n) {
	showSlide(slideIndex += n);
}

function showSlide (n) {
	var card = document.querySelectorAll('.our-team-card');
	if (n > card.length-3) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = card.length-3;
	}
	for (var i = 0; i < card.length; i++) {
		card[i].style.display = 'none';
	}
	card[slideIndex-1].style.display = 'block';
	card[slideIndex].style.display = 'block';
	card[slideIndex+1].style.display = 'block';
	card[slideIndex+2].style.display = 'block';
 }
 