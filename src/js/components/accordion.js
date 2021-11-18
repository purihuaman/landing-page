		
const accordion = () => {
	const accordion = document.getElementById('accordion')
	const accordionTexts = [...document.querySelectorAll('.accordion__text')]

	accordion.addEventListener('click', ( event ) => {
		const targetClass = event.target.classList

		if ( targetClass.contains('accordion__title') ) {
			event.target.nextElementSibling.classList.toggle('accordion__text--active')
			event.target.classList.toggle('accordion__title--active')
		}
	})
}

accordion()

export {
	accordion
}

