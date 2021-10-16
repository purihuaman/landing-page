const myMenu = (( doc ) => {

	const topBar 			= doc.getElementById('top-bar'),
				iconMenu 		= doc.getElementById('icon-menu'),
				mainNav 		= doc.getElementById('main-nav'),
				loginButton = doc.getElementById('login-button');
	
	iconMenu.addEventListener('click', ( event ) => {

		if ( topBar.classList.contains('top-bar--active') ) {

			iconMenu.src = './assets/image/icon-hamburger.svg';
			mainNav.classList.remove('main-nav--active');
			topBar.classList.remove('top-bar--active');
			
		} else {
			
			iconMenu.src = './assets/image/icon-close.svg';
			mainNav.classList.add('main-nav--active');
			topBar.classList.add('top-bar--active');

		}

	});

})( document );


