$(document).ready(function(){
	// Check Username start.
	$("#username").blur(function(){
		var username = $(this).val();
		$.ajax({
			url:"check/checkuser.php",
			method:"POST",
			data:{username:username},
			dataType:"text",
			success:function(data){
				$('#userstatus').html(data);
			}
		});
	});

	//Autocomplete textbox start.
	$("#skill").keyup(function(){
		var skill = $(this).val();
		if (skill != '') {
			$.ajax({
				url:"check/checkskill.php",
				method:"POST",
				data:{skill:skill},
				//dataType:"text",
				success:function(data){
					$('#statusskill').fadeIn();
					$('#statusskill').html(data);
				}
			});
		};
	});

	$(document).on('click','li', function(){
		$("#skill").val($(this).text());
		$('#statusskill').fadeOut();
	});
});  