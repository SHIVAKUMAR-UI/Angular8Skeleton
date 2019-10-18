jQuery(document).ready(function(){
	//Page Loader
	jQuery('.spinner').fadeOut();
	
	//Inital Fund Modal
	jQuery('#initalFundModal').modal({show:true});
	
	//Discount popup
	jQuery('.selectDiscount').change(function() {
		jQuery('#selectDiscountModal').modal('show');
	});
	
	/*var ctrlPressed = false;
	jQuery(window).keydown(function(evt) {
	  if (evt.which == 112) { 
	    ctrlPressed = false; 
	    window.location.href = "index.html";
	  };
	  if (evt.which == 113) { 
	    ctrlPressed = false; 
	    jQuery('#returnModal').modal('show');
	  };
	  if (evt.which == 114) { 
	    ctrlPressed = false; 
	    jQuery('#holdModal').modal('show');
	  };
	   if (evt.which == 115) { 
	    ctrlPressed = false; 
	    jQuery('#resumeModal').modal('show');
	  };
	   if (evt.which == 116) { 
	    ctrlPressed = false; 
	     window.location.href = "inventory.html";
	  };
	   if (evt.which == 117) { 
	    ctrlPressed = false; 
	   	jQuery('#cancelModal').modal('show');
	  }; 
	});*/
	
});