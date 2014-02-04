Deface::Override.new(:virtual_path => 'spree/address/_form',
  :name => 'add_middle_states_to_checkout',
  :insert_before => "erb[silent]:contains('if Spree::Config[:address_requires_state]')",
  :text => "
    <p> hola </p>
  ")