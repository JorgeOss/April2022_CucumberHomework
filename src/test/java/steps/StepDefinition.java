package steps;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class StepDefinition extends TestBase{
LoginPage loginPage;
DashboardPage dashboardPage;

	
@Before
public void setUp() {
	initDriver();
	loginPage = PageFactory.initElements(driver, LoginPage.class);
	dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
}

@Given("^User is on the techfios login page$")
public void user_is_on_the_techfios_login_page() {
	driver.get("https://techfios.com/billing/?ng=login/");
}

@When("^Users enters the \"([^\"]*)\" in \"([^\"]*)\" field$")
public void users_enters_the_in_field(String loginData, String field){
	switch(field) {
	case "username":
		loginPage.enterUserName(loginData);
	break;
	case "password":
		loginPage.enterPassword(loginData);
		break;
	default:
		System.out.println("There was a mistake");
	}
}

@And("^User clicks on login$")
public void user_clicks_on_login() throws Throwable {
	loginPage.loginButton();
}

@Then("^User should land on Dashboard page$")
public void user_should_land_on_Dashboard_page() throws Throwable {
	dashboardPage.dashboardPages();
	String dashboardExpected = "Dashboard";

}

@And("^User clicks on bankCash$")
public void user_clicks_on_bankCash() throws Throwable {
	 dashboardPage.bankAndCash();
	   Thread.sleep(1000);
}

@And("^User clicks on newAccount$")
public void user_clicks_on_newAccount() throws Throwable {
	dashboardPage.newAccount();
}

@And("^User enters \"([^\"]*)\" in \"([^\"]*)\" field$")
public void user_enters_in_field(String Data, String field) {
	
	 switch (field) {
	   case "accountTitle":
		   dashboardPage.accountTittle(Data);
		 break;
	   case "description":
		   dashboardPage.descriptionAccount(Data);
		 break;
	   case "initialBalance":
		   dashboardPage.initialBalance(Data); 
		 break;
	   case "accountNumber":
		   dashboardPage.accountNumber(Data); 
		 break;
	   case "contactPerson":
		   dashboardPage.contactPerson(Data); 
		 break;
	   case "Phone":
		   dashboardPage.PhoneNumber(Data); 
		 break;
	   case "internetBankingURL":
		   dashboardPage.internetBanking(Data); 
		 break;
		   default: System.out.println("no data found");
	   }
	
}


@And("^User clicks on Submit$")
public void user_clicks_on_Submit() throws Throwable {
   dashboardPage.submitButton();
}

@Then("^User should be able to validate account created successfully$")
public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
String actualMsg = dashboardPage.accountCreatedSuccsess();
String msgExpected = "×\nAccount Created Successfully";
Assert.assertEquals(msgExpected, actualMsg);
Thread.sleep(8000);




}

@After
public void endTest() {
	
	tearDown();

}

}


