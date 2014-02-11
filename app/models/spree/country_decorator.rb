Spree::Country.class_eval do
	attr_accessible :has_middle_states
	def middle_states
		middle_states = []
		self.states.each do |state|
			middle_states << [state.middle_state, state.middle_state] if state.middle_state and state.middle_state != ''
		end
		return middle_states.uniq
	end

	def middle_states_obj
		middle_states = {}
		self.states.each do |state|
			next if state.middle_state.nil? or state.middle_state == ''
			middle_states[state.middle_state] = { :states => []} unless middle_states.has_key?(state.middle_state)
			middle_states[state.middle_state][:states] << {:name => state.name, :id => state.id }
		end
		return middle_states
	end
end