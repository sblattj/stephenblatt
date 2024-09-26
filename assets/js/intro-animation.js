function initAnimations() {

	const animate2 = document.querySelector('.animate2');

	gsap.ticker.fps(30);

	gsap.to('.animate1', {
		scrollTrigger: {
			trigger: '#one',
			scrub: 2,
			end: '+=200',
		},
		transformOrigin: 'top',
		opacity: 0,
	});

	gsap.to(animate2, {
		scrollTrigger: {
			trigger: '#one',
			scrub: 1,
			end: "+=200",
		},
		scale: 1.5,
		transformOrigin: 'center',
		textShadow: '0px 1px 1px #000',
	});

	gsap.to('.animate3', {
		scrollTrigger: {
			trigger: '#header',
			start: 'top top',
			scrub: 1,
			end: '+=200',
		},
		opacity: 0,
		textShadow: '0px 1px 1px #000',
	});

	// --- if you want to enable the animations for the sections ---
	// Animation for section one
	// const oneContentBox = document.querySelector('#one .content.box');
	// const oneP = document.querySelector('#one p');
	// const oneH2 = document.querySelector('#one h2');

	// gsap.to(oneH2, {
	// 	scrollTrigger: {
	// 		trigger: oneContentBox,
	// 		start: 'top center',
	// 		end: 'bottom center',
	// 		toggleActions: 'play none none reverse',
	// 	},
	// 	opacity: 1,
	// 	duration: 1,
	// });

	// gsap.set(oneP, { display: 'none', opacity: 0 });

	// oneContentBox.addEventListener('click', function () {
	// 	gsap.set(oneP, { display: 'block' });
	// 	gsap.to(oneP, {
	// 		opacity: 1,
	// 		duration: 1,
	// 	});
	// 	gsap.to(oneH2, {
	// 		scale: 0.5,
	// 		duration: 1,
	// 	});
	// });

	// // Animation for section two
	// const twoContentBox = document.querySelector('#two .content.box');
	// const twoP = document.querySelector('#two p');
	// const twoH2 = document.querySelector('#two h2');

	// gsap.to(twoH2, {
	// 	scrollTrigger: {
	// 		trigger: twoContentBox,
	// 		start: 'top center',
	// 		end: 'bottom center',
	// 		toggleActions: 'play none none reverse',
	// 	},
	// 	opacity: 1,
	// 	duration: 1,
	// });

	// gsap.set(twoP, { display: 'none', opacity: 0 });

	// twoContentBox.addEventListener('click', function () {
	// 	gsap.set(twoP, { display: 'block' });
	// 	gsap.to(twoP, {
	// 		opacity: 1,
	// 		duration: 1,
	// 	});
	// 	gsap.to(twoH2, {
	// 		scale: 0.5,
	// 		duration: 1,
	// 	});
	// });

	// // Animation for section three
	// const threeContentBox = document.querySelector('#three .content.box');
	// const threeP = document.querySelector('#three p');
	// const threeH2 = document.querySelector('#three h2');

	// gsap.to(threeH2, {
	// 	scrollTrigger: {
	// 		trigger: threeContentBox,
	// 		start: 'top center',
	// 		end: 'bottom center',
	// 		toggleActions: 'play none none reverse',
	// 	},
	// 	opacity: 1,
	// 	duration: 1,
	// });

	// gsap.set(threeP, { display: 'none', opacity: 0 });

	// threeContentBox.addEventListener('click', function () {
	// 	gsap.set(threeP, { display: 'block' });
	// 	gsap.to(threeP, {
	// 		opacity: 1,
	// 		duration: 1,
	// 	});
	// 	gsap.to(threeH2, {
	// 		scale: 0.5,
	// 		duration: 1,
	// 	});
	// });
}

// Initialize animations on page load
initAnimations();