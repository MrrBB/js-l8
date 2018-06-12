window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info')[0],
		aboutUs = document.getElementById('btn-about'),
		aboutUsInfo = document.getElementById('about'),
		photo = document.getElementById('btn-photo'),
		price = document.getElementById('btn-price'),
		contacts = document.getElementById('btn-contacts');


	function hideTabContent(a) {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			// hideTabContant(1);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	showTabContent(0)
	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i] && i != 0){
					hideTabContent((i-1));
					hideTabContent(0);
					showTabContent(i);
					break;
				} else{
					hideTabContent(3);
					hideTabContent(2);
					hideTabContent(1);
					showTabContent(0);
				}
			}
		}
	});

//TIMER

	let deadLine = '2018-06-12';

	function getTimeRemaning(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date());
		let seconds = Math.floor((t/1000)%60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor( (t/(1000*60*60) % 60) ) ; 

			//условие
				if(t < 0){
					hours = 0,
					minutes  = 0,
					seconds =  0					
				}




			if(hours < 10){
				hours = '0' + hours;
			}
			if(minutes < 10){
				minutes = '0' + minutes;
			}
			if(seconds < 10){
				seconds = '0' + seconds;
			}
			return{
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			}
	}

	function setClock(id, endTime){

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaning(endTime);

				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;


				

				// if(t.total <= 0){
				// 	clearInterval(timeInterval);
				// }
			}

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadLine);

//scroll

		const scrollLink = document.querySelectorAll('a[href^="#"]'), 
    			animationTime = 0.3; 
		for (let i = 0; i < scrollLink.length; i++) {

		    scrollLink[i].addEventListener('click', function(e) { 
		        event.preventDefault();
		        let w = window.pageYOffset,
		            hash = this.href.replace(/[^#]*(.*)/, '$1');
		        	topCoordinates = document.querySelector(hash).getBoundingClientRect().top,
		            start = null;

		            //вау
		        requestAnimationFrame(step);


		        function step(time) {

		        	//ааа!?
		            if (start === null)
		            	 start = time;


		            let progress = time - start,
		                r = (topCoordinates < 0 ? Math.max(w - progress/animationTime, w + topCoordinates) : Math.min(w + progress/animationTime, w + topCoordinates));
		            window.scrollTo(0,r);
		            if (r != w + topCoordinates) {
		                requestAnimationFrame(step)
		            } else {
		                location.hash = hash
		            }
		        }
		    }, false);
		}

})	


// aboutUs = document.getElementById('#about'),
// 		photo = document.getElementById('#photo'),
// 		price = document.getElementById('#price'),
// 		contacts = document.getElementById('#contacts');