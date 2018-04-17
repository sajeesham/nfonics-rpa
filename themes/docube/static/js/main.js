jQuery(document).ready(function($){
	//update these values if you change these breakpoints in the style.css file (or _layout.scss if you use SASS)
	var MqM= 768,
		MqL = 1024;

	var faqsSections = $('.cd-faq-group'),
		faqTrigger = $('.cd-faq-trigger');

		faqTrigger.on('click', function(e) {
			e.preventDefault();

			if($(this).parent().hasClass('content-visible')) {
				$(this).next('.cd-faq-content')
					.slideToggle(300).end()
					.parent().removeClass('content-visible');
			} else {
				// faqsSections.children('li').hide()
				$(".cd-faq-content").slideUp(200).parent('li').removeClass('content-visible');
				$(this).next('.cd-faq-content').slideToggle(500).end().parent('li').toggleClass('content-visible');
			}

		})

  // toggle
  var toggleDiv = $('.doToggle');
  toggleDiv.on('click', function(e) {
    e.preventDefault();
    $(this).next('.doToggleContent').slideToggle(300);
    $(this).toggleClass('active');
  })

	$('.cd-faq-group li:first-child').addClass('content-visible');
	$('.cd-faq-group li:first-child .cd-faq-content').show();

});
