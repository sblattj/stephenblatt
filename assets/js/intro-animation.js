function initAnimations() {

	const animate2 = document.querySelector('.animate2');

	gsap.ticker.fps(30);

	gsap.to('.animate1', {
		scrollTrigger: {
			trigger: '#one',
			scrub: 2,
			end: '+=200',
		},
		transformOrigin: 'center',
		opacity: 0,
		onComplete: function() {
			// document.querySelector('.animate1').style.display = 'none';
		}
	});

	gsap.to(animate2, {
		scrollTrigger: {
			trigger: '#one',
			scrub: 1,
			// pin: animate2,
			// start: "top top",
			end: "+=200",
		},
		scale: 1.5,
		transformOrigin: 'center',
		textShadow: '0px 1px 1px #000',
	});

	gsap.to('.animate3', {
		scrollTrigger: {
			trigger: '#one',
			scrub: 1,
			end: '+=200',
		},
		opacity: 0,
		textShadow: '0px 1px 1px #000',
	});
}

// Initialize animations on page load
initAnimations();