$(function() {
	var g = $('.gallery');
	
	if (g.length > 0)
		g.poptrox({
			usePopupDefaultStyling: false,
			popupLoaderText: '&nbsp;'
		});
});