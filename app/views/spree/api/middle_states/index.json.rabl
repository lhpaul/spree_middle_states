object @country
attributes :states_required, :has_middle_states
if @country.states_required
	if @country.has_middle_states
		node(:middle_states) { @middle_states }
	end
	child :states do
	attributes :id, :name, :abbr, :country_id
	end
end