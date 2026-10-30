Feature: Categories: Open Edit
  As a Posters Galore admin user
  I want to verify categories: open edit
  So that the module behaves correctly for automation

  @posters-galore @22-Categories-Open-Edit
  Scenario: Opening a category shows the edit form
    Given I open categories to edit a record
    When I open the first category row
    Then the category edit form with name field is displayed
