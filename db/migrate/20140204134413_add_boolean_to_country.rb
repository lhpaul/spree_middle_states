class AddBooleanToCountry < ActiveRecord::Migration
  def change
  	add_column :spree_countries, :has_middle_states, :boolean
  end
end
