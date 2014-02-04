//= require store/spree_frontend

Spree.ready(function($){

  $('#bcountry select').unbind('change');
  $('#scountry select').unbind('change');

  $('#bcountry select').change(function() {
  	console.log("funciona");
  });

  $('#scountry select').change(function() {
  	console.log("funciona");
  });


});


