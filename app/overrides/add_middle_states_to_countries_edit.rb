Deface::Override.new(:virtual_path => 'spree/admin/countries/_form',
  :name => 'add_middle_states_to_country',
  :insert_bottom => "div.omega",
  :text => '
    <div data-hook="has_middle_states" class="field checkbox" id="has_middle_states">
      <label>
        <%= f.check_box :has_middle_states %>
        <%= Spree.t(:has_middle_states) %>
      </label>
    </div>
  ')