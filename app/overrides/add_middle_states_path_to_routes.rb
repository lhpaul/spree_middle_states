Deface::Override.new(:virtual_path => 'spree/shared/_routes',
  :name => 'add_middle_states_to_routes',
  :insert_after => "script",
  :text => "
  <script>
  Spree.routes.middle_states_search = '<%= spree.api_middle_states_path(:format => 'json') %>'
  </script>
  ")