module Spree
	module Api
		class MiddleStatesController < Spree::Api::BaseController
			skip_before_filter :check_for_user_or_api_key
			skip_before_filter :authenticate_user
			def index
				@country = Country.find(params[:country_id])
				@middle_states = @country.middle_states_obj if @country.has_middle_states
			end
		end
	end
end