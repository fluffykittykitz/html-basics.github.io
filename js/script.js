$(function(){
	//DOM READY 

'use strict'
//tabs 
$( "#mini-gallery" ).tabs();

//buttons 
$( ".btn" ).button();

//check box and radio buttons 
$( "input[type='radio']" ).checkboxradio();

	//setting options for radio buttons (disabled options)
	$( "#opt4 , #opt5 , #opt6" ).checkboxradio({
	  disabled: true
	});
		// Getter
		var disabled = $( "#opt4 , #opt5 , #opt6" ).checkboxradio( "option", "disabled" );
		 
		// Setter
		$( "#opt4 , #opt5 , #opt6").checkboxradio( "option", "disabled", true );


	/*//option 5 (disabled and selected)
	$( "#opt5" ).checkboxradio( "enable" );*/

var $events= $('.events'),
$up=$(".upcoming-events");

if(jQuery().cycle){

    var cycleOptions= {
    slides:"li",
    timeout:2000
    };

    $events.cycle(cycleOptions);

}

$up.on("click", "btn-prev", function(){
    $events.cycle('prev'); 
});

$up.on("click", "btn-next", function(){
    $events.cycle('next'); 
});

 $(".datepicker").datepicker();


});



