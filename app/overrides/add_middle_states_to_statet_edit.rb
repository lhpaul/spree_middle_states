Deface::Override.new(:virtual_path => 'spree/admin/states/_form',
  :name => 'add_middle_states_to_states_edit',
  :insert_bottom => "div.omega",
  :text => "
  <% if @country.has_middle_states %>
    <%= f.field_container :middle_state_select do %>
      <%= f.label :middle_state, Spree.t(:middle_state) %>
      <br>
      <%= f.select :middle_state, @country.middle_states %>
    <% end %>
    <%= f.field_container :middle_state do %>
      <%= f.label :middle_state, Spree.t(:middle_state) %>
      <br>
      <%= f.text_field :middle_state %>
    <% end %>
    <%= f.field_container :new_middle_state do %>
      <%= f.label :new_middle_state, Spree.t(:new_middle_state)  %>
      <br>
      <%= check_box_tag :new_middle_state %>
    <% end %>
  <% end %>
  ")

Deface::Override.new(:virtual_path => 'spree/admin/states/_form',
  :name => 'binding_events',
  :insert_after => "div.row",
  :text => "
    <%= javascript_tag 'Spree.ready(function($){ bind_events(); });' %>
  ")