
$(document).ready(function(){
	
	
	$("#right").load("_home.html");
	$('.menuLink').click(function (){
		var toLoad = '_'+$(this).attr('id')+'.html';
		$("#right").hide("fast", loadContent);
		function loadContent (){
			$("#right").load(toLoad, '', showNewContent);
		}
		function showNewContent (){
			$("#right").show('normal');
		}
	});

	/*$("#_home").click( function(){
		$("#right").load("_home.html");
	});
	$("#_tech").click( function(){
		var page= $.get("_tech.html");
		
		$("#right").slideUp(500);
		$("#right").html(page);
		
		$("#right").slideDown();
	});
	$("#exp").click( function(){
		$("#right").load("_exp.html");
	});
	$("#projects").click( function(){
		$("#right").load("_projects.html");
	});
	$("#related").click( function(){
		$("#right").load("_related.html");
	}); */

});
