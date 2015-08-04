$(function() {
  var doctor = window.location.href.split('#')[1];

  $('#' + doctor).removeClass('closed');

  $('#' + doctor).addClass('opened');  

  $('#doctors td a, a.back, a.textbox').click(function(){
    var doctor = $(this).attr('href').split('#')[1];
    $('#' + doctor).removeClass('closed').addClass('opened').siblings().removeClass('opened').addClass('closed');
    $('h2 span.sub.' + doctor).addClass('show').siblings().removeClass('show');
    $('#doctors').hide();
    return false;
  	});

  $('a.back').click(function(){
    $('h2 span.sub').removeClass('show');
    $('#doctors').show();
  });

	$('#schedule').accordion({
		header: "h4",
		collapsible: true,
		active: false,
		heightStyle: "content"
	});
});
