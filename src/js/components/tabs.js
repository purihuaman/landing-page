const tabs = ( ) => {
	const tabs = document.getElementById('tabs');
	// const tabsItem = [...doc.querySelectorAll('.tabs__item')] // para usar metodo ( map, etc)
	const tabsItem = [...document.querySelectorAll('.tabs__item')],
				tabsContent = [...document.querySelectorAll('.tabs__content')];


	tabs.addEventListener('click', ( event ) => {
	
		const index = tabsItem.indexOf( event.target );

		if ( event.target.classList.contains('tabs__item') ) {

			tabsItem.forEach(( item, idx ) => {

				item.classList.remove('tabs__item--active');
				tabsContent[idx].classList.remove('tabs__content--active');
				
			})
			
			event.target.classList.add('tabs__item--active');
			tabsContent[index].classList.add('tabs__content--active');
		}
		
	});
}

tabs()

export {
	tabs
}