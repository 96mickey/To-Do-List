//check off specific to-do
$("ul").on("click","li",function(){
	// if($(this).css("color")=== "rgb(128, 128, 128)"){
	// 	$(this).css({color:"black",
	// 	textDecoration:"none"
	// });
	// }else{
	// 	$(this).css({color:"grey",
	// 	textDecoration:"line-through"
	// });
	// }


	//or


	$(this).toggleClass("completed");
	
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which==13){
		var todotext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ todotext);
	}
});

$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
});