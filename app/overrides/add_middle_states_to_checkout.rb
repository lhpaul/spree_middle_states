Deface::Override.new(:virtual_path => 'spree/address/_form',
  :name => 'add_middle_states_to_checkout',
  :insert_before => "erb[silent]:contains('if Spree::Config[:address_requires_state]')",
  :text => "
  <% if Spree::Config[:address_requires_state] and not address.country.middle_states.empty? %>
    <p class=\"field\" id=<%=\"\#{address_id}middle_state\" %>>
      <% have_middle_states = !address.country.middle_states.empty? %>
      <%= form.label :middle_state, Spree.t(:middle_state) %><span class='required' id=<%=\"\#{address_id}middle_state-required\"%>>*</span><br/>
      <%= select_tag :middle_state, address.country.middle_states %>
    </p>
  <% end %>
  ")