//= require store/spree_frontend
var middle_states;

Spree.ready(function($){

  $('#bcountry select').unbind('change');
  $('#scountry select').unbind('change');

  $('#bcountry select').change(function() {
    Spree.updateMiddlesStates('b');
  });

  $('#scountry select').change(function() {
    Spree.updateMiddlesStates('s');
  });

  $('#bmiddle_state select').on("change", function()
    {
      states = getMiddleStateStates('b');
      Spree.fillStates(states, 'b');
    });

  $('#smiddle_state select').on("change", function()
    {
      states = getMiddleStateStates('s');
      Spree.fillStates(states, 's');
    });

  getCountryId = function(region){
    return $('#' + region + 'country select').val();
  }

  getMiddleStateStates = function(region)
  {
    mstate = $('#' + region + 'middle_state select').val();
    return middle_states[mstate];
  }

  Spree.updateMiddlesStates = function(region)
  {
    countryId = getCountryId(region)
    if(countryId)
      {
        if(!Spree.Checkout[countryId])
          {
            $.get(Spree.routes.middle_states_search, {country_id: countryId}, function(data) {
              Spree.Checkout[countryId] = {
                states_required : data.states_required,
                has_middle_states : data.has_middle_states,
                states : data.states,
                middle_states : data.middle_states
              }
              Spree.fillMiddleStates(Spree.Checkout[countryId], region);
            });
          }
        else
          {
            Spree.fillMiddleStates(Spree.Checkout[countryId], region);
          }
      }
  }

  Spree.fillMiddleStates = function(data, region)
  {
    middle_states = data.middle_states;
    if(data.has_middle_states && Object.getOwnPropertyNames(middle_states).length > 0)
      {
        mstatePara = $('#' + region + 'middle_state');
        mstatePara.show();
        mstateSelect = mstatePara.find('select');

        selected = parseInt(mstateSelect.val());
        mstateSelect.html('');
        $.each(middle_states, function(index, value)
        {
          console.log(index);
          opt = $(document.createElement('option')).attr('value', index).html(index);
          if(selected == index)
            {
              opt.prop('selected', true);
            }
            mstateSelect.append(opt);
        });
        states = getMiddleStateStates(region);
        Spree.fillStates(states, region);
      }
      else
      {
        $('#' + region + 'middle_state').hide();
        Spree.fillStates(data, region);
      }
  }

});



