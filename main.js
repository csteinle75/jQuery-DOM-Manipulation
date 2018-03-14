$(document).ready(function(){
	//allows content of various heights & transition, but applies inline height style
	$('.accordionTitle').click(function(){
		$('.defaultHidden').css('height', "")
		var contentHeight = $(this).siblings('.defaultHidden')[0].scrollHeight
		$(this).siblings('.defaultHidden').css('height', contentHeight + 'px')
	})

	//applies class & transition but uses pre-declared height
	$('.accTitle').click(function(){
		$('.hiddenContent').removeClass('displayContent')
		$(this).siblings('.hiddenContent').addClass('displayContent')
		
	})
})