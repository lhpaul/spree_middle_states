class AddMiddleStateToAddress < ActiveRecord::Migration
  def change
  	add_column :spree_addresses, :middle_state, :string
  end
end
