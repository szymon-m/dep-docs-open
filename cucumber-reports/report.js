$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("org/archipelago/features/imports.feature");
formatter.feature({
  "name": "application should properly import external data",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "having example.csv file application should properly read file and generate objects",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "having well prepared example file",
  "keyword": "Given "
});
formatter.match({
  "location": "Imports.having_well_prepared_example_file()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.archipelago.steps.Imports.having_well_prepared_example_file(Imports.java:14)\r\n\tat ✽.having well prepared example file(org/archipelago/features/imports.feature:5)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "we try to import data",
  "keyword": "When "
});
formatter.match({
  "location": "Imports.we_try_to_import_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "we should receive no errors on input and creating objects",
  "keyword": "Then "
});
formatter.match({
  "location": "Imports.we_should_receive_no_errors_on_input_and_creating_objects()"
});
formatter.result({
  "status": "skipped"
});
});