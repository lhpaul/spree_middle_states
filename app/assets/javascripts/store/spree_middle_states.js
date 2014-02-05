//= require store/spree_frontend

Spree.ready(function($){

  $('#bcountry select').unbind('change');
  $('#scountry select').unbind('change');

  $('#bcountry select').change(function() {
  	Spree.updateMiddlesStates('b');
  });

  $('#scountry select').change(function() {
  	Spree.updateMiddlesStates('s');
  });

  getCountryId = function(region){
  	return $('#' + region + 'country select').val();
  }

  Spree.updateMiddlesStates = function(region)
  {
  	countryId = getCountryId(region)
  	console.log(countryId);
  	if(countryId)
  	{
  		if(!Spree.Checkout[countryId])
  			$.get(Spree.routes.middle_states_search, {country_id: countryId}, function(data) {
  				Spree.Checkout[countryId] = {
  					states_required = data.states_required
  					has_middles_states = data.has_middles_states
  					states = data.states
  					middle_states = data.middle_states
  			});

  		Spree.fillStates(Spree.Checkout[countryId], region)
  	}
  }


});


