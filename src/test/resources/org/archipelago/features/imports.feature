Feature: application should properly import external data

  Scenario:having example.csv file application should properly read file and generate objects

    Given having well prepared example file
    When we try to import data
    Then we should receive no errors on input and creating objects
