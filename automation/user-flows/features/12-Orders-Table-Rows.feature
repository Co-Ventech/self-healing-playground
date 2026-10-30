Feature: Orders: Table Rows
  As a Posters Galore admin user
  I want to verify orders: table rows
  So that the module behaves correctly for automation

  @posters-galore @12-Orders-Table-Rows
  Scenario: Orders table lists order rows
    Given I open orders to verify the datagrid rows
    Then at least one order row is listed in the orders table
