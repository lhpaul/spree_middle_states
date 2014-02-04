//= require admin/spree_backend
bind_events = function()
	{
		$('div#state_middle_state_field').hide();
		$('input#new_middle_state').bind("change", function() {
			if(this.checked)
				{
					$('div#state_middle_state_field').show();
					$('div#state_middle_state_select_field').hide();
				}else
				{
					$('div#state_middle_state_field').hide();
					$('div#state_middle_state_select_field').show();
				}

			});
	};
