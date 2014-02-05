//= require admin/spree_backend
bind_events = function()
	{
		$('div#state_middle_state_field').hide();
		$('div#state_middle_state_field input#state_middle_state').attr('name','');

		$('input#new_middle_state').bind("change", function() {
			if(this.checked)
				{
					$('div#state_middle_state_field').show();
					$('div#state_middle_state_field input#state_middle_state').attr('name','state[middle_state]');
					$('div#state_middle_state_select_field').hide();
				}else
				{
					$('div#state_middle_state_field').hide();
					$('div#state_middle_state_field input#state_middle_state').attr('name','');
					$('div#state_middle_state_select_field').show();
				}

			});
	};
