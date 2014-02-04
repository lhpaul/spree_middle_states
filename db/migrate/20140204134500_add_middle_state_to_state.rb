class AddMiddleStateToState < ActiveRecord::Migration
  def change
  	add_column :spree_states, :middle_state, :string
  end
end
