package org.archipelago;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty" , "html:cucumber-reports"},
        glue = { "org.archipelago.steps"}
        )
public class RunCucumberTest {
}